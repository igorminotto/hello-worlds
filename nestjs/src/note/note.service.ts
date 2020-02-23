import { Injectable, NotFoundException } from '@nestjs/common';
import { NoteDTO } from './dto/note.dto';
import { Note } from './note.entity';

@Injectable()
export class NoteService {
  public async create(noteDTO: NoteDTO): Promise<Note> {
    return Note.create(noteDTO).save();
  }

  public async update(note: Note, noteDTO: Partial<NoteDTO>): Promise<Note> {
    return Note.merge(note, noteDTO).save();
  }

  public async findOne(id: number): Promise<Note> {
    const note = await Note.findOne(id);

    if (!note) throw new NotFoundException();

    return note;
  }

  public async findAll(): Promise<Note[]> {
    return Note.find();
  }
}
