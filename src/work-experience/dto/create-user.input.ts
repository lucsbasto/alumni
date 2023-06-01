import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateWorkExperienceInput {
  @Field()
  graduateId: string

  @Field()
  title: string

  @Field()
  type: string

  @Field()
  companyName: string

  @Field()
  startDate: string

  @Field()
  endDate: string

  @Field()
  description: string
}
