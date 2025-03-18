import { Todo } from "./todo.entity";
import { Repository } from "typeorm";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { UserService } from "../user/user.service";
export declare class TodoService {
    private todosRepository;
    private userService;
    constructor(todosRepository: Repository<Todo>, userService: UserService);
    create(todoDto: CreateTodoDto): Promise<void>;
    findAll(): Promise<Todo[]>;
    findComplete(): Promise<Todo[]>;
    remove(id: number): Promise<void>;
    completed(id: number): Promise<string>;
}
