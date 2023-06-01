import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
@ObjectType()
export class WorkExperience {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  title: string

  @Field()
  type: string

  @Field()
  @Column()
  companyName: string

  @Field()
  @Column()
  startDate: string

  @Field()
  @Column()
  endDate: string

  @Field()
  @Column()
  description: string

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
