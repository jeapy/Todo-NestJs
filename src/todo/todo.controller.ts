import {Body, Controller, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import {TodoService} from "./todo.service";

import {CreateTodoDto} from "../dto/create-todo.dto";
import {Todo} from "./todo.entity";


@Controller('todo')
export class TodoController {
    constructor(private todoService:TodoService) {}

    @Post()
    async registerTodo(@Body() createTodoDto: CreateTodoDto){
        return this.todoService.create(createTodoDto)
    }

    @Get()
    async findAll(): Promise<Todo[]> {
        return this.todoService.findAll();
    }

    @Get()
    async findCompleted(): Promise<Todo[]> {
        return this.todoService.findComplete();
                //or
    //    return (await this.todoService.findAll()).filter((todo) => todo.is_completed )
    }

    @Put(':id/completed')
    complete(@Param('id',ParseIntPipe) id: number){
        return this.todoService.completed(id);
    }
}
