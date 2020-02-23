import { Test, TestingModule } from '@nestjs/testing';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { Note } from './note.interface';

describe('Note Controller', () => {
  let service: NoteService;
  let controller: NoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoteService],
      controllers: [NoteController],
    }).compile();

    service = module.get<NoteService>(NoteService);
    controller = module.get<NoteController>(NoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    let note = { title: 'A', body: 'aaaa' };

    beforeEach(async () => {
      service.create(note);
    });

    it('should return an array of notes', async () => {
      expect(await controller.findAll()).toStrictEqual<Note[]>([note]);
    });
  });
});
