import { Field, InputType } from '@nestjs/graphql'
import { UpdateUserInput } from '~/user/dto/update-user.input'

@InputType()
export class UpdateGraduateInput {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  startGraduation: string

  @Field({ nullable: true })
  endGraduation: string

  @Field(_type => [String], { nullable: true })
  courseId: string[]

  @Field(_type => UpdateUserInput, { nullable: true })
  user: UpdateUserInput
}
