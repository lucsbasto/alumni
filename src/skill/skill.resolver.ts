import { Args, Mutation, Resolver, Query } from '@nestjs/graphql'
import { CreateSkillInput } from './dto/create-skill.input'
import { UpdateSkillInput } from './dto/update-skill.input'
import { Skill } from './entities/skill.entity'
import { SkillService } from './skill.service'

@Resolver()
export class SkillResolver {
  constructor (private readonly service: SkillService) {}

  @Query(() => [Skill], { name: 'findAllSkill' })
  async list (): Promise<Skill[]> {
    return this.service.findAll()
  }

  @Mutation(() => Skill, { name: 'createSkill' })
  async create (@Args('createSkillInput') createSkillInput: CreateSkillInput): Promise<Skill | null> {
    return this.service.create(createSkillInput)
  }

  @Mutation(() => Skill, { name: 'updateSkill' })
  async update (@Args('updateSkillInput') updateSkillInput: UpdateSkillInput): Promise<Skill | null> {
    return this.service.update(updateSkillInput)
  }

  @Mutation(() => Skill, { name: 'deleteSkill' })
  async delete (@Args('id', { type: () => String }) id: string): Promise<void> {
    return this.service.delete(id)
  }
}
