import { Test, TestingModule } from '@nestjs/testing';
import { GraduateController } from '../../src/graduate/graduate.controller';

describe('GraduateController', () => {
  let controller: GraduateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GraduateController],
    }).compile();

    controller = module.get<GraduateController>(GraduateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
