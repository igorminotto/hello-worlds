export class NoteDTO {
  constructor(data: Partial<NoteDTO>) {
    Object.assign(this, data);
  }

  title: string;
  body: string;
}
