import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateTodoDto{
    @IsNotEmpty()
    @IsString()
    @MinLength(3,{
        message: "la taille de $property doit etre au moins $constraint1"
    })
    @MaxLength(10, {
        message: "la taille de $property doit etre inferieure a $constraint1"
    })
    name: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(10,{
        message: "la taille de $property doit etre au moins $constraint1"
    })
    description: string;
}