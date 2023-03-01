import { Field, InputType, PartialType } from '@nestjs/graphql'
import { UpdateCountryInput } from '~/country/dto/update-country.input'

@InputType()
export class UpdateStateInput {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  UF: string

  @Field()
  countryId: string
}
