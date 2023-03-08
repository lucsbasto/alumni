import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateCourseInput } from './dto/create-course.input'
import { UpdateCourseInput } from './dto/update-course.input'
import { Course } from './entities/course.entity'
import { CourseService } from './course.service'

@Resolver()
export class CourseResolver {
  constructor (private readonly service: CourseService) {}

  @Query(() => [Course], { name: 'findAllCourse' })
  async list (): Promise<Course[]> {
    return this.service.findAll()
  }

  @Mutation(() => Course, { name: 'createCourse' })
  async create (@Args('createCourseInput') createCourseInput: CreateCourseInput): Promise<Course> {
    return this.service.create(createCourseInput)
  }

  @Mutation(() => Course, { name: 'updateCourse' })
  async update (@Args('updateCourseInput') updateCourseInput: UpdateCourseInput): Promise<Course | null> {
    return this.service.update(updateCourseInput)
  }

  @Mutation(() => Course, { name: 'deleteCourse' })
  async delete (@Args('id', { type: () => String }) id: string): Promise<Course | null> {
    return this.service.delete(id)
  }
}
