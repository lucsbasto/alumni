import { Injectable } from '@nestjs/common'
import { CreateSkillInput } from './dto/create-skill.input'
import { UpdateSkillInput } from './dto/update-skill.input'
import { Skill } from './entities/skill.entity'
import { SkillRepository } from './skill.repository'

@Injectable()
export class SkillService {
  constructor (
    private readonly repository: SkillRepository
  ) {}

  async create (input: CreateSkillInput): Promise<Skill | null> {
    let skill = await this.repository.findOne({ where: { name: input.name, level: input.level } })
    if (!skill) {
      skill = await this.repository.save(input)
    }
    return this.repository.findOneAndRelated(skill.id)
  }

  async findAll (): Promise<Skill[]> {
    return this.repository.find({
      relations: {
        course: { college: { address: { city: { state: { country: true } } } } },
        jobs: {
          company: {
            address: { city: { state: { country: true } } },
            user: { address: { city: { state: { country: true } } } }
          }
        }
      }
    })
  }

  async update (input: UpdateSkillInput): Promise<Skill | null> {
    await this.repository.update({ id: input.id }, { ...input })
    return this.repository.findOne({ where: { id: input.id } })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
