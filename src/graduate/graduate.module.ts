import { Module } from '@nestjs/common';
import { GraduateController } from './graduate.controller';
import { GraduateService } from './graduate.service';
import { GraduateResolver } from './graduate.resolver';

@Module({
  controllers: [GraduateController],
  providers: [GraduateService, GraduateResolver]
})
export class GraduateModule {}
