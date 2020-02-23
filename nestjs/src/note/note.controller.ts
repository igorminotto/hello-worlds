import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteDTO } from './dto/note.dto';
import { Note } from './note.entity';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  public async create(@Body() note: NoteDTO): Promise<Note> {
    return this.noteService.create(note);
  }

  @Put('/:id')
  public async update(
    @Param('id') id: number,
    @Body() noteDTO: Partial<NoteDTO>,
  ): Promise<Note> {
    const note = await this.noteService.findOne(id);

    return this.noteService.update(note, noteDTO);
  }

  @Get()
  public async findAll(): Promise<Note[]> {
    return this.noteService.findAll();
  }

  @Get('/:id')
  public async find(@Param('id') id: number): Promise<Note> {
    return this.noteService.findOne(id);
  }

  @Delete('/:id')
  public async delete(@Param('id') id: number): Promise<void> {
    const note = await this.noteService.findOne(id);

    note.remove();
  }
}
