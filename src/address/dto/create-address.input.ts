import { Field, InputType } from '@nestjs/graphql'

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
}
