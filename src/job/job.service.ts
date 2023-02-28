import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateJobInput } from './dto/create-job.input'
import { UpdateJobInput } from './dto/update-job.input'
import { Job } from './entities/job.entity'
import { JobRepository } from './job.repository'

@Injectable()
export class JobService {
  constructor (
    @InjectRepository(Job)
    private readonly repository: JobRepository
  ) {}

  async create (input: CreateJobInput): Promise<Job> {
    return this.repository.save(input)
  }

  async findAll (): Promise<Job[]> {
    return this.repository.find({ relations: ['skills', 'company'] })
  }

  async update (_input: UpdateJobInput): Promise<Job | null> {
    await this.repository.update({ id: _input.id }, { ..._input })
    return this.repository.findOne({ where: { id: _input.id } })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
