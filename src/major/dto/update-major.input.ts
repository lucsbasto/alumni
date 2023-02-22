import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateMajorInput {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  degree: string

  @Field()
  description: string

  @Field(_type => [String])
  collegesId: string[]
}
