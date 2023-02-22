import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CollegeResolver } from './college.resolver'
import { CollegeService } from './college.service'
import { College } from './entities/college.entity'

@Module({
  imports: [TypeOrmModule.forFeature([College])],
  providers: [CollegeResolver, CollegeService]
})
export class CollegeModule {}
