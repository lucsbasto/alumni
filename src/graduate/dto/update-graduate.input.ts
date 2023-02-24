import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateGraduateInput {
  @Field()
  id: string

  @Field()
  startGraduation: string

  @Field()
  endGraduation: string

  @Field(_type => [String])
  majorId: string[]
}
