import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './models/todo.model';

@Injectable()
export class TodoService {

    private todos: Todo[] = [];

    constructor() {
        this.todos = [
            new Todo('Lundi', 'Entamer la semaine'),
        ]
    }

    private findTodoByid(id: string): Todo {
        let todo: Todo = this.todos.find(t => t.id === id);
        if (todo)
            return todo;
        throw new NotFoundException(`le todo d'id ${id} n'existe pas`);
    }

    getTodos() {
        return this.todos;
    }
    getTodoById(id: string): Todo {
        return this.findTodoByid(id);
    }

    addTodo(newTodo: CreateTodoDto): Todo {
        const todo = new Todo(newTodo.name, newTodo.description);
        this.todos.push(todo);
        return todo;
    }

    deleteTodo(id: string): Todo[] {
        const todo = this.findTodoByid(id);
        this.todos.splice(this.todos.indexOf(todo), 1);
        return this.todos;
    }

    updateTodo(id: string, newTodo: UpdateTodoDto): Todo{
        const {name, description, status} = newTodo;
    const todo = this.findTodoByid(id);
    todo.name = name? name : todo.name;
    todo.description = description? description : todo.description;
    todo.status = status? status : todo.status;
    return todo;
    }


}
