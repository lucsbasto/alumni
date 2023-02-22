import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateCollegeInput {
  @Field()
  name: string

  @Field()
  userId: string

  @Field()
  addressId: string
}
