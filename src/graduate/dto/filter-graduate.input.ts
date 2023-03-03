import { Field, InputType } from '@nestjs/graphql'
import { SkillLevel } from '~/skill/enum/skill-level.enum'

@InputType()
export class FilterGraduateInput {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  startGraduation: string

  @Field({ nullable: true })
  endGraduation: string

  @Field({ nullable: true })
  courseId: string

  @Field({ nullable: true })
  countryId: string

  @Field({ nullable: true })
  stateId: string

  @Field({ nullable: true })
  cityId: string

  @Field(_type => [String], { nullable: true })
  skillsId: string[]

  @Field(_type => SkillLevel, { nullable: true })
  skillLevel: SkillLevel
}
