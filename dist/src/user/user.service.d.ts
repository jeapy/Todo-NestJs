import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { EditUserDto } from "../dto/edit-user.dto";
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(userDto: CreateUserDto): Promise<void>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User | null>;
    updateName(id: number, editDto: EditUserDto): Promise<string>;
    remove(id: number): Promise<void>;
}
