import { Injectable } from '@nestjs/common'
import { InternalServerErrorException, NotFoundException } from '@nestjs/common/exceptions'
import { InjectRepository } from '@nestjs/typeorm'
import { In } from 'typeorm'
import { Course } from '~/course/entities/course.entity'
import { CourseRepository } from '~/course/course.repository'
import { User } from '~/user/entities/user.entity'
import { UserRepository } from '~/user/user.repository'
import { CreateGraduateInput } from './dto/create-graduate.input'
import { UpdateGraduateInput } from './dto/update-graduate.input'
import { Graduate } from './entities/graduate.entity'
import { GraduateRepository } from './graduate.repository'

@Injectable()
export class GraduateService {
  constructor (
    @InjectRepository(Graduate)
    private readonly repository: GraduateRepository,
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
    @InjectRepository(Course)
    private readonly courseRepository: CourseRepository
  ) {}

  async create (input: CreateGraduateInput): Promise<Graduate> {
    const user = await this.userRepository.create(input.user)
    if (!user) {
      throw new InternalServerErrorException('User not created')
    }

    return this.repository.save({ ...input, user })
  }

  async findAll (): Promise<Graduate[]> {
    return this.repository.find({ relations: ['user', 'courses', 'jobs'] })
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
    console.log(graduate)
    await this.repository.save(graduate)
    return graduate
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
