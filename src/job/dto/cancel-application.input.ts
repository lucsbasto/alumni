import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CancelApplicationInput {
  @Field()
  jobId: string

  @Field()
  graduateId: string
}
