import { Field, InputType } from '@nestjs/graphql'
import { ObjectID } from 'typeorm'

@InputType()
export class UpdateCollegeInput {
  @Field()
  id: ObjectID

  @Field()
  name: string

  @Field()
  userId: ObjectID

  @Field()
  addressId: ObjectID
}
