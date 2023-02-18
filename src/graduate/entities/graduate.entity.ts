import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Graduate {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string;
}
