import { Module } from '@nestjs/common'
import { GraduateService } from './graduate.service'
import { GraduateResolver } from './graduate.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Graduate } from './entities/graduate.entity'
import { User } from '~/user/entities/user.entity'
import { Course } from '~/course/entities/course.entity'
import { Job } from '~/job/entities/job.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Graduate, User, Course, Job])],
  providers: [GraduateService, GraduateResolver]
})
export class GraduateModule {}
