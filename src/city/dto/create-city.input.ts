import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateCityInput {
  @Field()
  name: string

  @Field()
  stateId: string
}
