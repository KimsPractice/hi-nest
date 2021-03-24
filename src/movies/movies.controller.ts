import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getMovie(@Param('id') movieId: string) {
    return `This will return one movie ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will remove ${movieId} movie`;
  }

  @Patch(':id')
  path(@Param('id') movieId: string) {
    return `This will patch ${movieId} movie`;
  }
}
