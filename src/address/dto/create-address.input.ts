import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateAddressInput {
  @Field()
  street: string

  @Field()
  zipcode: string

  @Field()
  cityId: string

  @Field(_type => Int)
  number: number
}
