import { Test, TestingModule } from '@nestjs/testing';
import { GraduateResolver } from '../../src/graduate/graduate.resolver';

describe('GraduateResolver', () => {
  let resolver: GraduateResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraduateResolver],
    }).compile();

    resolver = module.get<GraduateResolver>(GraduateResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
