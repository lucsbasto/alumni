import { Field, InputType, Int } from '@nestjs/graphql'

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
