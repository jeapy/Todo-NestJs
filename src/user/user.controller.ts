import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';

import {UserService} from "./user.service";

import {CreateUserDto} from "../dto/create-user.dto";
import {User} from "./user.entity";
import {EditUserDto} from "../dto/edit-user.dto";

@Controller('user')
export class UserController {

    constructor(private userSerive: UserService) {
    }
    @Get()
    async findAll(): Promise<User[]> {
        return this.userSerive.findAll();
    }

    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id:number): Promise<User|null>{
        return this.userSerive.findOne(id) ;
    }

    @Put(':id')
    update(@Param('id',ParseIntPipe) id: number , @Body() upadeDto:EditUserDto){
        return this.userSerive.updateName(id,upadeDto);
    }

    @Post()
    async create(@Body() cUserDto: CreateUserDto){
        return this.userSerive.create(cUserDto)
    }

    @Delete(':id')
    delete(@Param('id',ParseIntPipe) id: number){
        return this.userSerive.remove(id)
    }
}
