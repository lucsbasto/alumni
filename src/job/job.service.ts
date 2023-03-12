import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { In } from 'typeorm/find-options/operator/In'
import { CreateJobInput } from './dto/create-job.input'
import { UpdateJobInput } from './dto/update-job.input'
import { Job } from './entities/job.entity'
import { JobRepository } from './job.repository'
import { NotFoundException } from '@nestjs/common/exceptions'
import { GraduateRepository } from '~/graduate/graduate.repository'
import { SkillRepository } from '~/skill/skill.repository'
import { ApplyForJobInput } from './dto/apply-for-job.input'
import { CancelApplicationInput } from './dto/cancel-application.input'

@Injectable()
export class JobService {
  constructor (
    private readonly repository: JobRepository,
    private readonly graduateRepository: GraduateRepository,
    private readonly skillRepository: SkillRepository
  ) {}

  async create (input: CreateJobInput): Promise<Job> {
    const skills = await this.skillRepository.findBy({ id: In([input.skills]) })
    if (!skills) {
      throw new NotFoundException('Skill not found')
    }

    return this.repository.save({ ...input, skills })
  }

  async findAll (): Promise<Job[]> {
    return this.repository.findManyAndRelated()
  }

  async update (input: UpdateJobInput): Promise<Job | null> {
    const skills = await this.skillRepository.findBy({ id: In([input.skills]) })
    await this.repository.update({ id: input.id }, { ...input, skills })
    return this.repository.findOne({ where: { id: input.id } })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }

  async close (id: string): Promise<Job | null> {
    await this.repository.update({ id }, { isOpen: false })
    return this.repository.findOne({ where: { id }, relations: ['company', 'graduates', 'skills'] })
  }

  async findApplicants (id: string): Promise<Job | null> {
    return this.repository.findOneAndRelated(id)
  }

  async apply (input: ApplyForJobInput): Promise<Job | null> {
    const job = await this.repository.findOne({ where: { id: input.jobId }, relations: { graduates: true } })
    if (!job) {
      throw new NotFoundException('Job not found or already closed')
    }
    const graduate = await this.graduateRepository.findOne({ where: { id: input.graduateId } })
    if (!graduate) {
      throw new NotFoundException('Graduate not found')
    }
    job.graduates.push(graduate)
    await this.repository.save(job)
    return this.repository.findOneAndRelated(input.jobId)
  }

  async cancelApplication (input: CancelApplicationInput): Promise<Job | null> {
    const job = await this.repository.findOne({ where: { id: input.jobId }, relations: { graduates: true } })
    if (!job) {
      throw new NotFoundException('Job not found or already closed')
    }
    const graduate = await this.graduateRepository.findOne({ where: { id: input.graduateId } })
    if (!graduate) {
      throw new NotFoundException('Graduate not found')
    }
    job.graduates = job.graduates.filter(graduate => graduate.id !== input.graduateId)
    await this.repository.save(job)
    return this.repository.findOneAndRelated(input.jobId)
  }

  async findByGraduate (id: string): Promise<Job[]> {
    return this.repository.findByGraduate(id)
  }
}
