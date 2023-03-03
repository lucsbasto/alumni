import { Field, InputType } from '@nestjs/graphql'
import { CreateAddressInput } from '~/address/dto/create-address.input'
import { CreateUserInput } from '~/user/dto/create-user.input'

@InputType()
export class CreateCompanyInput {
  @Field(_type => CreateUserInput)
  user: CreateUserInput

  @Field(_type => CreateAddressInput)
  address: CreateAddressInput

  @Field()
  cnpj: string

  @Field()
  name: string
}
