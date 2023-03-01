import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Course } from './entities/course.entity'

@Injectable()
export class CourseRepository extends Repository<Course> {}
