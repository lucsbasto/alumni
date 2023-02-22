import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateGraduateInput {
  @Field()
  userId: string

  @Field(_type => Int)
  graduationYear: number

  @Field(_type => [String])
  majorId: string[]
}
