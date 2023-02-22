import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateMajorInput } from './dto/create-major.input'
import { UpdateMajorInput } from './dto/update-major.input'
import { Major } from './entities/major.entity'
import { MajorRepository } from './major.repository'

@Injectable()
export class MajorService {
  constructor (
    @InjectRepository(Major)
    private readonly repository: MajorRepository
  ) {}

  async create (input: CreateMajorInput): Promise<Major> {
    return this.repository.save(input)
  }

  async findAll (): Promise<Major[]> {
    return this.repository.find()
  }

  async update (_input: UpdateMajorInput): Promise<Major | null> {
    await this.repository.update({ id: _input.id }, { ..._input })
    return this.repository.findOneBy({ id: _input.id })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
