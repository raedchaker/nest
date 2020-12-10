import { MaxLength } from 'class-validator';
import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { ErrorMessagesEnum } from "../enums/error.enum";
import { TodoStatusEnum } from './../enums/todo-status.enum';
export class UpdateTodoDto{
    @IsIn([TodoStatusEnum.actif, TodoStatusEnum.waiting, TodoStatusEnum.waiting], {message: ErrorMessagesEnum.inStatusEnum})
    @IsOptional()
    status : TodoStatusEnum;
    @IsNotEmpty()
    @IsString()
    @MinLength(3,{
        message: ErrorMessagesEnum.minLength
    })
    @MaxLength(10, {
        message: ErrorMessagesEnum.maxLength
    })
    @IsOptional()
    name: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(10,{
        message: ErrorMessagesEnum.minLength
    })
    @IsOptional()
    description: string;
}