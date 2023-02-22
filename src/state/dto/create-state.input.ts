import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateStateInput {
  @Field()
  name: string

  @Field()
  UF: string

  @Field()
  countryId: string
}
