import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class UpdateGraduateInput {
  @Field()
  id: string

  @Field()
  userId: string

  @Field(_type => Int)
  graduationYear: number

  @Field(_type => [String])
  majorId: string[]
}
