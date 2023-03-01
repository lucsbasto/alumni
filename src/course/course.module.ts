import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { College } from '~/college/entities/college.entity'
import { Graduate } from '~/graduate/entities/graduate.entity'
import { Course } from './entities/course.entity'
import { CourseResolver } from './course.resolver'
import { CourseService } from './course.service'

@Module({
  imports: [TypeOrmModule.forFeature([Course, Graduate, College])],
  providers: [CourseService, CourseResolver]
})
export class CourseModule {}
