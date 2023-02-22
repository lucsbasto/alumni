import { Field, InputType, Int } from '@nestjs/graphql'
import { ObjectID } from 'typeorm'

@InputType()
export class UpdateGraduateInput {
  @Field()
  id: ObjectID

  @Field()
  name: string

  @Field()
  degree: string

  @Field()
  description: string

  @Field(_type => Int)
  colleges: string
}
