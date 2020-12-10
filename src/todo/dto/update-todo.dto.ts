import { MaxLength } from 'class-validator';
import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { TodoStatusEnum } from './../enums/todo-status.enum';
export class UpdateTodoDto{
    @IsIn([TodoStatusEnum.actif, TodoStatusEnum.waiting, TodoStatusEnum.waiting], {message: `le status est invalide`})
    @IsOptional()
    status : TodoStatusEnum;
    @IsNotEmpty()
    @IsString()
    @MinLength(3,{
        message: "la taille de $property doit etre au moins $constraint1"
    })
    @MaxLength(10, {
        message: "la taille de $property doit etre inferieure a $constraint1"
    })
    @IsOptional()
    name: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(10,{
        message: "la taille de $property doit etre au moins $constraint1"
    })
    @IsOptional()
    description: string;
}