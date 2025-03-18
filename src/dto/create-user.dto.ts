import {IsString, IsStrongPassword} from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;
    @IsString()
    username: string;
    @IsString()
    password: string;
}
