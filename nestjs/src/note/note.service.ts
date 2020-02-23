import { Injectable } from '@nestjs/common';
import { NoteDTO } from './dto/note.dto';

@Injectable()
export class NoteService {
  private readonly notes: NoteDTO[] = [];

  public create(note: NoteDTO) {
    this.notes.push(note);
  }

  public findAll(): NoteDTO[] {
    return this.notes;
  }
}
