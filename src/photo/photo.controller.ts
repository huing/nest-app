import { Controller, Post, Body, Get, Put, Delete, Param} from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private photoService: PhotoService) { }
  @Post()
  create(@Body() photo: Photo) {
      return this.photoService.createPhoto(photo);
  }
}
