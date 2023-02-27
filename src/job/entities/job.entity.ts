import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Company } from '~/company/entities/company.entity'
import { Graduate } from '~/graduate/entities/graduate.entity'
import { Skill } from '~/skill/entities/skill.entity'
import { ExperienceLevelEnum } from '../enum/expecience-level.enum'
import { WorkModel } from '../enum/work-model.enum'

@Entity()
@ObjectType()
export class Job {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  experienceLevel: ExperienceLevelEnum

  @Field()
  @Column()
  work_model: WorkModel

  @Field()
  @Column()
  description: string

  @Field(_type => Int)
  @Column()
  openings: number

  @Field(_type => [Graduate])
  @ManyToMany(_type => Graduate, graduate => graduate.jobs)
  graduates: Graduate[]

  @Field(_type => Company)
  @ManyToOne(_type => Company, _job => Job)
  company: Company

  @Field(_type => [Skill])
  @ManyToMany(_type => Skill, skill => skill.jobs)
  @JoinTable({ name: 'job_skills' })
  skills: Skill[]

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
