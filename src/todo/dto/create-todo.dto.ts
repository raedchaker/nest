import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { ErrorMessagesEnum } from "../enums/error.enum";

export class CreateTodoDto{
    @IsNotEmpty()
    @IsString()
    @MinLength(3,{
        message: ErrorMessagesEnum.minLength
    })
    @MaxLength(10, {
        message: ErrorMessagesEnum.maxLength
    })
    name: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(10,{
        message: ErrorMessagesEnum.minLength
    })
    description: string;
}