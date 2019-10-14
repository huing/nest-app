import { Controller, Get, Post, Req, Param, Body } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('/detail')
  findDetail(@Param() params): string {
    return `This action returns a cat`;
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `This action returns aaaaa #${id} cat`;
  }

  // @Get()
  // findAll(@Req() request: Request): string {
  //   return 'This action returns all cats';
  // }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  // @Get()
  // findAll(): Observable<any[]> {
  //   return of([]);
  // }

  // @Post()
  // create(): string {
  //   return 'This action adds a new cat';
  // }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    // return 'This action adds a new cat';
  }

}
