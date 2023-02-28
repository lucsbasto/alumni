import { Field, InputType, Int } from '@nestjs/graphql'
import { Skill } from '~/skill/entities/skill.entity'
import { ExperienceLevelEnum } from '../enum/expecience-level.enum'
import { WorkModel } from '../enum/work-model.enum'

@InputType()
export class UpdateJobInput {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  degree: string

  @Field()
  description: string

  @Field()
  work_model: WorkModel

  @Field()
  experienceLevel: ExperienceLevelEnum

  @Field(_type => Int)
  openings: number

  // @Field(_type => [Skill])
  // skills: Skill[]
}
