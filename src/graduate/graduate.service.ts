import { Injectable } from '@nestjs/common'
import { NotFoundException } from '@nestjs/common/exceptions'
import { InjectRepository } from '@nestjs/typeorm'
import { In } from 'typeorm'
import { Major } from '~/major/entities/major.entity'
import { MajorRepository } from '~/major/major.repository'
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
    @InjectRepository(Major)
    private readonly majorRepository: MajorRepository
  ) {}

  async create (input: CreateGraduateInput): Promise<Graduate> {
    const user = await this.userRepository.findOneBy({ id: input.userId })
    if (!user) {
      throw new NotFoundException('User not found')
    }

    return this.repository.save({ ...input, user })
  }

  async findAll (): Promise<Graduate[]> {
    return this.repository.find({ relations: ['user', 'majors'] })
  }

  async update (input: UpdateGraduateInput): Promise<Graduate | null> {
    const graduate = await this.repository.findOne({ where: { id: input.id } })
    if (!graduate) {
      throw new NotFoundException('Graduate not found')
    }
    const majors = await this.majorRepository.findBy({ id: In(input.majorId) })
    if (majors.length === 0) {
      throw new NotFoundException('Major not found')
    }
    graduate.majors = majors
    console.log(graduate)
    await this.repository.save(graduate)
    return graduate
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
