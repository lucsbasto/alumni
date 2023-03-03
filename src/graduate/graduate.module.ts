import { Module } from '@nestjs/common'
import { GraduateService } from './graduate.service'
import { GraduateResolver } from './graduate.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraduateRepository } from './graduate.repository'
import { UserRepository } from '~/user/user.repository'
import { CourseRepository } from '~/course/course.repository'
import { JobRepository } from '~/job/job.repository'

@Module({
  imports: [TypeOrmModule.forFeature([GraduateRepository, UserRepository, CourseRepository, JobRepository])],
  providers: [GraduateService, GraduateResolver, GraduateRepository]
})
export class GraduateModule {}
