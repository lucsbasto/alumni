import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Job, Course } from '.'

@Entity()
@ObjectType()
export class Skill {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  description: string

  @Field()
  @Column()
  level: string

  @Field(_type => Course)
  @ManyToOne(_type => Course, _skill => Skill)
  course: Course

  @Field(_type => [Job])
  @ManyToMany(_type => Job, job => job.skills)
  jobs: Job[]

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
