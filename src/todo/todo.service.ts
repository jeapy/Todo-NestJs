import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Todo} from "./todo.entity";
import {Repository} from "typeorm";
import {CreateTodoDto} from "../dto/create-todo.dto";
import {UserService} from "../user/user.service";


@Injectable()
export class TodoService {

    constructor(
        @InjectRepository(Todo)
        private todosRepository: Repository<Todo>,
        private userService:UserService
    ) {}

    async create(todoDto: CreateTodoDto){

        const todo:Todo = new Todo();
        todo.title = todoDto.title;
        todo.description = todoDto.description;


        todo.created_at = new Date().toString();

       const user =  this.userService.findOne(todoDto.userId) ;
        if (!user){
            throw new NotFoundException()
        }
        todo.user = await user ;

        await this.todosRepository.save(todo);
    }

    findAll(): Promise<Todo[]>{
        return this.todosRepository.find()
    }

    findComplete(): Promise<Todo[]>{
        return this.todosRepository.findBy({is_completed: true})
    }

    async remove(id: number){
        await this.todosRepository.delete(id)
    }

    async completed(id: number) {
        const todo = await this.todosRepository.findOneBy({id})
        if(!todo){
            throw new NotFoundException()
        }

        if (todo.is_completed){
            return `Todo with id ${id} is already completed successfully`
        }

        todo.is_completed = true
        todo.completed_at = new Date().toString()

        await this.todosRepository.save(todo)

        return `Todo with id ${id} is completed successfully`
    }
}
