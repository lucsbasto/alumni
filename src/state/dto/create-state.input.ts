import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateStateInput {
  @Field()
  name: string

  @Field()
  UF: string

  @Field(_type => Int)
  countryId: number
}
