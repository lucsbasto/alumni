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
import { SkillRepository } from '~/skill/skill.repository'

@Injectable()
export class GraduateService {
  constructor (
    private readonly repository: GraduateRepository,
    private readonly userRepository: UserRepository,
    private readonly courseRepository: CourseRepository,
    private readonly skillRepository: SkillRepository
  ) {}

  async create (input: CreateGraduateInput): Promise<Graduate> {
    const user = await this.userRepository.create(input.user)
    if (!user) {
      throw new InternalServerErrorException('User not created')
    }

    return this.repository.save({ ...input, user })
  }

  async findAll (filter: FilterGraduateInput): Promise<Graduate[]> {
    return this.repository.findManyByFilter(filter)
  }

  async update (input: UpdateGraduateInput): Promise<Graduate | null> {
    const graduate = await this.repository.findOne({ where: { id: input.id } })
    if (!graduate) {
      throw new NotFoundException('Graduate not found')
    }
    if (input.user) {
      const user = await this.userRepository.findOne({ where: { id: input.user.id } })
      if (user) {
        user.birthdate = input.user.birthdate ? new Date(input.user.birthdate) : user.birthdate
        user.firstName = input.user.firstName ?? user.firstName
        user.lastName = input.user.lastName ?? user.lastName
        user.email = input.user.email ?? user.email
        user.password = input.user.password ?? user.password
        user.phone = input.user.phone ?? user.phone
        await this.userRepository.save(user)
      }
    }
    if (!graduate) {
      throw new NotFoundException('Graduate not found')
    }

    if (input.courseId) {
      const courses = await this.courseRepository.find({ where: { id: In(input.courseId) } })
      graduate.courses = courses ?? graduate.courses
    }
    await this.repository.save(graduate)
    return this.repository.findOneAndRelated(graduate.id)
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }

  async upgradeSkillLevel (input: { graduateId: string, skillId: string }): Promise<Graduate | null> {
    const graduate = await this.repository.findOne({ where: { id: input.graduateId } })
    if (!graduate) {
      throw new NotFoundException('Graduate not found')
    }

    const skill = await this.skillRepository.findOne({ where: { id: input.skillId } })
    if (!skill) {
      throw new NotFoundException('Skill not found')
    }
    graduate.skills.push(skill)
    await this.repository.save(graduate)
    return this.repository.findOneAndRelated(graduate.id)
  }
}
