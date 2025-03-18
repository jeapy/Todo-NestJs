import { TodoService } from "./todo.service";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { Todo } from "./todo.entity";
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    registerTodo(createTodoDto: CreateTodoDto): Promise<void>;
    findAll(): Promise<Todo[]>;
    findCompleted(): Promise<Todo[]>;
    complete(id: number): Promise<string>;
}
