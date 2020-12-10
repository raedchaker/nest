import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Body, Controller, Get, Param, Post, Delete, Patch, Put } from '@nestjs/common';


@Controller('todo')
export class TodoController {

  constructor(private todoService: TodoService) { }

  @Get()
  getTodos() {
    return this.todoService.getTodos();
  }

  @Get(':id')
  getTodoById(
    @Param('id') id
  ) {
    return this.todoService.getTodoById(id);
  }

  @Post()
  addTodos(
    @Body() newTodo: CreateTodoDto
  ) {
    return this.todoService.addTodo(newTodo);
  }



  @Delete(':id')
  deleteTodo(
    @Param('id') id
  ) {
    this.todoService.deleteTodo(id);
    return "deleted successfully";
  }

  @Patch(':id')
  updateTodo(
    @Param('id') id,
    @Body() newTodo: UpdateTodoDto
  ) {
    return this.todoService.updateTodo(id, newTodo);
  }

  @Put(':id')
  updateTodoPut(
    @Param('id') id,
    @Body() newTodo: UpdateTodoDto
  ) {
    return this.todoService.updateTodo(id, newTodo);
  }

}
