import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { In } from 'typeorm/find-options/operator/In'
import { CreateJobInput } from './dto/create-job.input'
import { UpdateJobInput } from './dto/update-job.input'
import { Job } from './entities/job.entity'
import { JobRepository } from './job.repository'

@Injectable()
export class JobService {
  constructor (
    @InjectRepository(Job)
    private readonly repository: JobRepository,
    @InjectRepository(Job)
    private readonly jobRepository: JobRepository
  ) {}

  async create (input: CreateJobInput): Promise<Job> {
    const skills = await this.jobRepository.findBy({ id: In([input.skills]) })
    return this.repository.save({ ...input, skills })
  }

  async findAll (): Promise<Job[]> {
    return this.repository.find({ relations: ['skills', 'company'] })
  }

  async update (input: UpdateJobInput): Promise<Job | null> {
    const skills = await this.jobRepository.findBy({ id: In([input.skills]) })
    await this.repository.update({ id: input.id }, { ...input, skills })
    return this.repository.findOne({ where: { id: input.id } })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
