import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateGraduateInput } from './dto/create-graduate.input'
import { UpdateGraduateInput } from './dto/update-graduate.input'
import { Graduate } from './entities/graduate.entity'
import { GraduateRepository } from './graduate.repository'

@Injectable()
export class GraduateService {
  constructor (
    @InjectRepository(Graduate)
    private readonly repository: GraduateRepository
  ) {}

  async create (input: CreateGraduateInput): Promise<Graduate> {
    return this.repository.save(input)
  }

  async findAll (): Promise<Graduate[]> {
    return this.repository.find()
  }

  async update (_input: UpdateGraduateInput): Promise<Graduate | null> {
    await this.repository.update({ id: _input.id }, { ..._input })
    return this.repository.findOne({ where: { id: _input.id } })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
