import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
