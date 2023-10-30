import { Test, TestingModule } from '@nestjs/testing';
import { NotifiiService } from './notifii.service';

describe('NotifiiService', () => {
  let service: NotifiiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotifiiService],
    }).compile();

    service = module.get<NotifiiService>(NotifiiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
