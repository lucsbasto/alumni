import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateCountryInput {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  code: string
}
