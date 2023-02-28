import { Field, InputType, Int } from '@nestjs/graphql'
import { Skill } from '~/skill/entities/skill.entity'
import { WorkModel } from '../enum/work-model.enum'

@InputType()
export class CreateJobInput {
  @Field()
  name: string

  @Field()
  degree: string

  @Field()
  description: string

  @Field()
  work_model: WorkModel

  @Field(_type => Int)
  openings: number

  @Field(_type => [Skill])
  skills: Skill[]
}
