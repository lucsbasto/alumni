import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Company, Graduate, Skill } from '../entities'

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
  experienceLevel: string

  @Field()
  @Column()
  work_model: string

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
  @ManyToOne(_type => Company, company => company.jobs)
  company: Company

  @Field(_type => [Skill])
  @ManyToMany(_type => Skill, skill => skill.jobs)
  @JoinTable({ name: 'job_skills' })
  skills: Skill[]

  @Field()
  @Column()
  isOpen: boolean

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
