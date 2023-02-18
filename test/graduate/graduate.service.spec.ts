import { Test, TestingModule } from '@nestjs/testing';
import { GraduateService } from '../../src/graduate/graduate.service';

describe('GraduateService', () => {
  let service: GraduateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraduateService],
    }).compile();

    service = module.get<GraduateService>(GraduateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
