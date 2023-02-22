import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Major } from './entities/major.entity'
import { MajorResolver } from './major.resolver'
import { MajorService } from './major.service'

@Module({
  imports: [TypeOrmModule.forFeature([Major])],
  providers: [MajorService, MajorResolver]
})
export class MajorModule {}
