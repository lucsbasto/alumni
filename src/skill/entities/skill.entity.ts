import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Job } from '~/job/entities/job.entity'
import { Major } from '~/major/entities/major.entity'
import { LevelEnum } from '../enum/level.enum'

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
  level: LevelEnum

  @Field()
  @Column()
  description: string

  @Field(_type => Major)
  @ManyToOne(_type => Major, _skill => Skill)
  major: Major

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
