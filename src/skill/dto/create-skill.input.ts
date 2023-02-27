import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateSkillInput {
  @Field()
  name: string

  @Field()
  degree: string

  @Field()
  description: string
}
