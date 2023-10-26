import { Test, TestingModule } from '@nestjs/testing';
import { HistorialMedicoController } from './historial_medico.controller';
import { HistorialMedicoService } from './historial_medico.service';

describe('HistorialMedicoController', () => {
  let controller: HistorialMedicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorialMedicoController],
      providers: [HistorialMedicoService],
    }).compile();

    controller = module.get<HistorialMedicoController>(HistorialMedicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
