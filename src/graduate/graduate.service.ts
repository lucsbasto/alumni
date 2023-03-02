import { Injectable } from '@nestjs/common'
import { InternalServerErrorException, NotFoundException } from '@nestjs/common/exceptions'
import { In } from 'typeorm'
import { CourseRepository } from '~/course/course.repository'
import { UserRepository } from '~/user/user.repository'
import { CreateGraduateInput } from './dto/create-graduate.input'
import { UpdateGraduateInput } from './dto/update-graduate.input'
import { Graduate } from './entities/graduate.entity'
import { GraduateRepository } from './graduate.repository'
import { FilterGraduateInput } from './dto/filter-graduate.input'

@Injectable()
export class GraduateService {
  constructor (
    private readonly repository: GraduateRepository,
    private readonly userRepository: UserRepository,
    private readonly courseRepository: CourseRepository
  ) {}

  async create (input: CreateGraduateInput): Promise<Graduate> {
    const user = await this.userRepository.create(input.user)
    if (!user) {
      throw new InternalServerErrorException('User not created')
    }

    return this.repository.save({ ...input, user })
  }

  async findAll (filter: FilterGraduateInput): Promise<Graduate[]> {
    return this.repository.findByFilter(filter)
  }

  async update (input: UpdateGraduateInput): Promise<Graduate | null> {
    const graduate = await this.repository.findOne({ where: { id: input.id } })
    if (!graduate) {
      throw new NotFoundException('Graduate not found')
    }
    const courses = await this.courseRepository.findBy({ id: In(input.courseId) })
    if (courses.length === 0) {
      throw new NotFoundException('course not found')
    }
    graduate.courses = courses
    await this.repository.save(graduate)
    return graduate
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
