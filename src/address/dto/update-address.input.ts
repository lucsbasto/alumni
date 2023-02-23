import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class UpdateAddressInput {
  @Field()
  id: string

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
