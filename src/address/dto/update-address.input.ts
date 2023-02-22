import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class UpdateAddressInput {
  @Field()
  id: string

  @Field()
  street: string

  @Field()
  zipcode: string

  @Field()
  cityId: string

  @Field(_type => Int)
  number: number
}
