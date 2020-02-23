import { Controller, Body, Post, Get } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteDTO } from './dto/note.dto';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  public create(@Body() note: NoteDTO) {
    this.noteService.create(note);
  }

  @Get()
  public findAll(): NoteDTO[] {
    return this.noteService.findAll();
  }
}
