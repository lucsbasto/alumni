import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class ApplyForJobInput {
  @Field()
  jobId: string

  @Field()
  graduateId: string
}
