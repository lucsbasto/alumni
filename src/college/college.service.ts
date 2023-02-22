import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CollegeRepository } from './college.repository'
import { CreateCollegeInput } from './dto/create-college.input'
import { UpdateCollegeInput } from './dto/update-college.input'
import { College } from './entities/college.entity'

@Injectable()
export class CollegeService {
  constructor (
    @InjectRepository(College)
    private readonly repository: CollegeRepository
  ) {}

  async create (input: CreateCollegeInput): Promise<College> {
    return this.repository.save(input)
  }

  async findAll (): Promise<College[]> {
    return this.repository.find()
  }

  async update (_input: UpdateCollegeInput): Promise<College | null> {
    await this.repository.update({ id: _input.id }, { ..._input })
    return this.repository.findOne({ where: { id: _input.id } })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
