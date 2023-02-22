import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateMajorInput {
  @Field()
  name: string

  @Field()
  degree: string

  @Field()
  description: string

  @Field(_type => [String])
  collegesId: string[]
}
