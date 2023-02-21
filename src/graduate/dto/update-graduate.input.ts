import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateGraduateInput {
  @Field(_type => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}
