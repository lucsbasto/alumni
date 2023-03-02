import { Module } from '@nestjs/common'
import { GraduateService } from './graduate.service'
import { GraduateResolver } from './graduate.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Graduate } from './entities/graduate.entity'
import { Job } from '~/job/entities/job.entity'
import { GraduateRepository } from './graduate.repository'
import { UserRepository } from '~/user/user.repository'
import { CourseRepository } from '~/course/course.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Graduate, UserRepository, CourseRepository, Job])],
  providers: [GraduateService, GraduateResolver, GraduateRepository]
})
export class GraduateModule {}
