import { Injectable } from '@nestjs/common'
import { NotFoundException } from '@nestjs/common/exceptions'
import { CollegeRepository } from '~/college/college.repository'
import { CreateCourseInput } from './dto/create-course.input'
import { UpdateCourseInput } from './dto/update-course.input'
import { Course } from './entities/course.entity'
import { CourseRepository } from './course.repository'

@Injectable()
export class CourseService {
  constructor (
    private readonly repository: CourseRepository,
    private readonly collegeRepository: CollegeRepository
  ) {}

  async create (input: CreateCourseInput): Promise<Course> {
    return this.repository.save(input)
  }

  async findAll (): Promise<Course[]> {
    return this.repository.find({ relations: ['college'] })
  }

  async update (input: UpdateCourseInput): Promise<Course | null> {
    const course = await this.repository.findOneBy({ id: input.id })
    const college = await this.collegeRepository.findOneBy({ id: input.collegeId })
    if (!college) {
      throw new NotFoundException('College not found')
    }
    if (!course) {
      throw new NotFoundException('Course not found')
    }
    course.college = college ?? course.college
    course.degree = input.degree ?? course.degree
    course.description = input.description ?? course.description
    course.name = input.name ?? course.name
    await this.repository.save(course)
    return course
  }

  async delete (id: string): Promise<Course | null> {
    await this.repository.update({ id }, { deletedDate: new Date() })
    return this.repository.findOne({ where: { id } })
  }
}
