import { Module } from '@nestjs/common';
import { GraduateService } from './graduate.service';
import { GraduateResolver } from './graduate.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraduateEntity } from './entities/graduate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GraduateEntity])],
  providers: [GraduateService, GraduateResolver]
})
export class GraduateModule {}
