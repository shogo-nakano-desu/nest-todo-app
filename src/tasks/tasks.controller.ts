import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks() {
    return `'getTasks Success!'`;
  }

  @Get('/:id')
  getTasksById(@Param('id', ParseIntPipe) id: number) {
    return `getTaskById Success! Parameter [id:${id}]`;
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return `createTask Success! Parameter [title:${title}, description:${description}]`;
  }

  @Delete('/:id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    return `deleteTask Success! Parameter [id:${id}]`;
  }

  @Patch('/:id')
  updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: string,
  ) {
    return `updateTask Success! Parameter [id:${id}, status:${status}]`;
  }
}
