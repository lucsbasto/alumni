import { Injectable } from '@nestjs/common'
import { NotFoundException } from '@nestjs/common/exceptions'
import { InjectRepository } from '@nestjs/typeorm'
import { CollegeRepository } from '~/college/college.repository'
import { College } from '~/college/entities/college.entity'
import { Graduate } from '~/graduate/entities/graduate.entity'
import { GraduateRepository } from '~/graduate/graduate.repository'
import { CreateMajorInput } from './dto/create-major.input'
import { UpdateMajorInput } from './dto/update-major.input'
import { Major } from './entities/major.entity'
import { MajorRepository } from './major.repository'

@Injectable()
export class MajorService {
  constructor (
    @InjectRepository(Major)
    private readonly repository: MajorRepository,
    @InjectRepository(College)
    private readonly collegeRepository: CollegeRepository
  ) {}

  async create (input: CreateMajorInput): Promise<Major> {
    return this.repository.save(input)
  }

  async findAll (): Promise<Major[]> {
    return this.repository.find({ relations: ['college'] })
  }

  async update (input: UpdateMajorInput): Promise<Major | null> {
    const major = await this.repository.findOneBy({ id: input.id })
    const college = await this.collegeRepository.findOneBy({ id: input.collegeId })
    if (!college) {
      throw new NotFoundException('College not found')
    }
    if (!major) {
      throw new NotFoundException('Major not found')
    }
    major.college = college ?? major.college
    major.degree = input.degree ?? major.degree
    major.description = input.description ?? major.description
    major.name = input.name ?? major.name
    await this.repository.save(major)
    return major
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
