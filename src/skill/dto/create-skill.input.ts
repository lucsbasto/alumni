import { Field, InputType } from '@nestjs/graphql'
import { SkillLevel } from '../enum/skill-level.enum'

@InputType()
export class CreateSkillInput {
 @Field({ nullable: true })
  name: string

  @Field({ nullable: true })
  degree: string

  @Field(_type => SkillLevel)
  level: SkillLevel

  @Field({ nullable: true })
  description: string
}
