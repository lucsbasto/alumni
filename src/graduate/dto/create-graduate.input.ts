import { Field, InputType } from '@nestjs/graphql'
import { CreateUserInput } from '~/user/dto/create-user.input'

@InputType()
export class CreateGraduateInput {
  @Field(_type => CreateUserInput)
  user: CreateUserInput

  @Field()
  startGraduation: string

  @Field()
  endGraduation: string

  @Field(_type => [String])
  courseId: string[]
}
