import { Injectable, NotFoundException } from '@nestjs/common'
import { GraduateRepository } from '~/graduate/graduate.repository'
import { CreateWorkExperienceInput } from './dto/create-user.input'
import { WorkExperienceRepository } from './work-experience.repository'

@Injectable()
export class WorkExperienceService {
  constructor (
    private readonly repository: WorkExperienceRepository,
    private readonly graduateRepository: GraduateRepository
  ) {}

  async create (input: CreateWorkExperienceInput): Promise<void> {
    const graduate = await this.graduateRepository.findOne({ where: { id: input.graduateId } })
    if (!graduate) {
      throw new NotFoundException('Graduate not found')
    }
    const workExperience = await this.repository.create({ ...input })
    graduate.workExperience = workExperience
    await this.repository.save(workExperience)
    await this.graduateRepository.save(graduate)
  }
}
