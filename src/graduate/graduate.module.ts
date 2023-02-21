import { Module } from '@nestjs/common';
import { GraduateController } from './graduate.controller';
import { GraduateService } from './graduate.service';
import { GraduateResolver } from './graduate.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraduateEntity } from './entities/graduate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GraduateEntity])],
  controllers: [GraduateController],
  providers: [GraduateService, GraduateResolver]
})
export class GraduateModule {}
