import { Module } from '@nestjs/common';
import {TodoController} from "./todo.controller";
import {TodoService} from "./todo.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Todo} from "./todo.entity";
import {UserModule} from "../user/user.module";

@Module({
    imports: [TypeOrmModule.forFeature([Todo]),UserModule],
    controllers:[TodoController],
    providers:[TodoService]
})
export class TodoModule {}
