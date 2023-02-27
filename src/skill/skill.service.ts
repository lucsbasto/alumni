import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateSkillInput } from './dto/create-skill.input'
import { UpdateSkillInput } from './dto/update-skill.input'
import { Skill } from './entities/skill.entity'
import { SkillRepository } from './skill.repository'

@Injectable()
export class SkillService {
  constructor (
    @InjectRepository(Skill)
    private readonly repository: SkillRepository
  ) {}

  async create (input: CreateSkillInput): Promise<Skill> {
    return this.repository.save(input)
  }

  async findAll (): Promise<Skill[]> {
    return this.repository.find()
  }

  async update (input: UpdateSkillInput): Promise<Skill | null> {
    await this.repository.update({ id: input.id }, { ...input })
    return this.repository.findOne({ where: { id: input.id } })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
