import { Field, InputType } from '@nestjs/graphql'
import { IsDate } from 'class-validator'

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string

  @Field()
  lastName: string

  @Field()
  email: string

  @Field()
  password: string

  @Field()
  @IsDate()
  birthdate: string

  @Field()
  phone: string

  @Field()
  addressId: string

  @Field()
  isAdmin: boolean
}
