import { Field, InputType } from '@nestjs/graphql'
import { IsDate } from 'class-validator'

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  id: string

  @Field({ nullable: true })
  firstName: string

  @Field({ nullable: true })
  lastName: string

  @Field({ nullable: true })
  email: string

  @Field({ nullable: true })
  @IsDate()
  birthdate: string

  @Field({ nullable: true })
  password: string

  @Field({ nullable: true })
  phone: string

  @Field({ nullable: true })
  addressId: string

  @Field({ nullable: true })
  isAdmin: boolean
}
