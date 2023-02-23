import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { College } from '~/college/entities/college.entity'
import { Graduate } from '~/graduate/entities/graduate.entity'
import { Major } from './entities/major.entity'
import { MajorResolver } from './major.resolver'
import { MajorService } from './major.service'

@Module({
  imports: [TypeOrmModule.forFeature([Major, Graduate, College])],
  providers: [MajorService, MajorResolver]
})
export class MajorModule {}
