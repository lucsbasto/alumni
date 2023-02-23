import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateAddressInput {
  @Field()
  block: string

  @Field()
  street: string

  @Field()
  zipcode: string

  @Field()
  cityId: string

  @Field()
  number: string

  @Field()
  lot: string

  @Field()
  complement: string
}
