import { Field, InputType } from '@nestjs/graphql'
import { UpdateAddressInput } from '~/address/dto/update-address.input'
import { UpdateUserInput } from '~/user/dto/update-user.input'

@InputType()
export class UpdateCompanyInput {
  @Field()
  id: string

  @Field({ nullable: true })
  cnpj: string

  @Field({ nullable: true })
  name: string

  @Field(_type => UpdateAddressInput, { nullable: true })
  address: UpdateAddressInput

  @Field(_type => UpdateUserInput, { nullable: true })
  user: UpdateUserInput
}
