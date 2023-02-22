import { Module } from '@nestjs/common'
import { GraduateService } from './graduate.service'
import { GraduateResolver } from './graduate.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Graduate } from './entities/graduate.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Graduate])],
  providers: [GraduateService, GraduateResolver]
})
export class GraduateModule {}
