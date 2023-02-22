import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateMajorInput {
  @Field()
  name: string

  @Field()
  degree: string

  @Field()
  description: string

  @Field(_type => Int)
  colleges: string
}
