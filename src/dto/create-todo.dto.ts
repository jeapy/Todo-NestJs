import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateTodoDto{
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    description: string;

    @IsNumber()
    userId:number;


}