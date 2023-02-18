import { Field } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Graduate {
  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
}
