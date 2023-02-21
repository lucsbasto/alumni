import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateGraduateInput {
  @Field()
  name: string;

  @Field()
  email: string;
}
