import { Injectable } from '@nestjs/common';
import { Note } from './note.interface';

@Injectable()
export class NoteService {
    private readonly notes: Note[] = [];

    public create(note: Note) {
        this.notes.push(note);
    }

    public findAll(): Note[] {
        return this.notes;
    }
}
