import { Todo } from "../todo/todo.entity";
export declare class User {
    id: number;
    name: string;
    username: string;
    password: string;
    todos: Todo[];
}
