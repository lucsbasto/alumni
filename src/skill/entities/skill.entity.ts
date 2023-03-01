import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Job } from '~/job/entities/job.entity'
import { Course } from '~/course/entities/course.entity'
import { SkillLevel } from '../enum/skill-level.enum'

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

  @Field(_type => SkillLevel)
  @Column()
  level: SkillLevel

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
