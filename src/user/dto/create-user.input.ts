import { Field, InputType } from '@nestjs/graphql'
import { IsDate } from 'class-validator'
import { CreateAddressInput } from '~/address/dto/create-address.input'

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

  @Field(_type => Date)
  @IsDate()
  birthdate: Date

  @Field()
  phone: string

  @Field(_type => CreateAddressInput)
  address: CreateAddressInput

  @Field()
  isAdmin: boolean
}
