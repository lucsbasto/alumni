import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CourseResolver } from './course.resolver'
import { CourseService } from './course.service'
import { CourseRepository } from './course.repository'
import { GraduateRepository } from '~/graduate/graduate.repository'
import { CollegeRepository } from '~/college/college.repository'

@Module({
  imports: [TypeOrmModule.forFeature([CourseRepository, GraduateRepository, CollegeRepository])],
  providers: [CourseService, CourseResolver, CourseRepository]
})
export class CourseModule {}
