import {Injectable, NotFoundException} from '@nestjs/common';

import {CreateUserDto} from "../dto/create-user.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import {EditUserDto} from "../dto/edit-user.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

 async  create(userDto: CreateUserDto){

        const user = new User();
        user.name = userDto.name;
        user.username = userDto.username;
        user.password = userDto.password;

       await this.usersRepository.save(user);
    }

    findAll(): Promise<User[]>{
        return this.usersRepository.find()
    }

    async findOne(id: number): Promise<User | null>{
        return this.usersRepository.findOneBy({id})
    }
    async updateName(id: number,editDto:EditUserDto) {
        const user = await this.usersRepository.findOneBy({id})
        if(!user){
            throw new NotFoundException()
        }
        (await user).name = editDto.name

        await this.usersRepository.save(user)

        return `User with id ${id} is updated successfully`
    }

    async remove(id: number){
        await this.usersRepository.delete(id)
    }
}
