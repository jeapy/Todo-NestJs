import { User } from "../user/user.entity";
export declare class Todo {
    id: number;
    title: string;
    description: string;
    is_completed: boolean;
    created_at: string;
    completed_at: string;
    user: User;
}
