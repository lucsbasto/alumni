import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateGraduateInput {
  @Field()
  userId: string

  @Field()
  startGraduation: string

  @Field()
  endGraduation: string
}
