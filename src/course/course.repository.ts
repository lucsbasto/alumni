import { Injectable } from '@nestjs/common'
import { Repository, DataSource } from 'typeorm'
import { Course } from './entities/course.entity'

@Injectable()
export class CourseRepository extends Repository<Course> {
  constructor (private dataSource: DataSource) {
    super(Course, dataSource.createEntityManager())
  }
}
