import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateCityInput {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  stateId: string
}
