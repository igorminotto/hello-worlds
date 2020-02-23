import { Module } from '@nestjs/common';
import { NoteModule } from 'src/note/note.module';

@Module({
  imports: [NoteModule],
})
export class AppModule {
  static readonly APP_NAME = 'my-app'
}
