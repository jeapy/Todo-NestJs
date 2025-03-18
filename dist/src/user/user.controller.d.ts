import { UserService } from "./user.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "./user.entity";
import { EditUserDto } from "../dto/edit-user.dto";
export declare class UserController {
    private userSerive;
    constructor(userSerive: UserService);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
    update(id: number, upadeDto: EditUserDto): Promise<string>;
    create(cUserDto: CreateUserDto): Promise<void>;
    delete(id: number): Promise<void>;
}
