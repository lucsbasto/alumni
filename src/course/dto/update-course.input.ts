import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateCourseInput {
  @Field()
  id: string

  @Field({ nullable: true })
  name: string

  @Field({ nullable: true })
  degree: string

  @Field({ nullable: true })
  description: string

  @Field({ nullable: true })
  collegeId: string
}
