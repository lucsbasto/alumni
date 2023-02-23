import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateCollegeInput {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  userId: string

  @Field()
  addressId: string

  @Field(_type => [String])
  majorsId: string[]
}
