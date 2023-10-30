import { Test, TestingModule } from '@nestjs/testing';
import { NotifiiGateway } from './notifii.gateway';
import { NotifiiService } from './notifii.service';

describe('NotifiiGateway', () => {
  let gateway: NotifiiGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotifiiGateway, NotifiiService],
    }).compile();

    gateway = module.get<NotifiiGateway>(NotifiiGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
