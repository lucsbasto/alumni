import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateUserInput {
  @Field()
  id: string

  @Field()
  firstName: string

  @Field()
  lastName: string

  @Field()
  email: string

  @Field()
  password: string

  @Field()
  phone: string

  @Field()
  addressId: string

  @Field()
  isAdmin: boolean
}
