import { Controller, Body, Post, Get } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from './note.interface';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  public create(@Body() note: Note) {
    this.noteService.create(note);
  }

  @Get()
  public findAll(): Note[] {
    return this.noteService.findAll();
  }
}
