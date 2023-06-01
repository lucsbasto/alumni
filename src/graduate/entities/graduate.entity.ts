import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Job } from '~/job/entities/job.entity'
import { Course } from '~/course/entities/course.entity'
import { User } from '~/user/entities/user.entity'
import { Skill } from '~/skill/entities/skill.entity'
import { WorkExperience } from '~/work-experience/entities/work-experience.entity'

@Entity()
@ObjectType()
export class Graduate {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field(_type => User)
  @OneToOne(_type => User, { cascade: true })
  @JoinColumn({ name: 'userId' })
  user: User

  @Field(_type => WorkExperience)
  @OneToOne(_type => WorkExperience, { cascade: true, nullable: true })
  @JoinColumn({ name: 'workExperienceId' })
  workExperience: WorkExperience

  @Field()
  @Column()
  startGraduation: string

  @Field()
  @Column()
  endGraduation: string

  @Field(_type => [Course])
  @ManyToMany(_type => Course, course => course.graduates, { eager: true })
  @JoinTable({ name: 'graduate_courses' })
  courses: Course[]

  @Field(_type => [Skill])
  @ManyToMany(_type => Skill, skill => skill.graduates, { eager: true, nullable: true })
  @JoinTable({ name: 'graduate_skill' })
  skills: Skill[]

  @Field(_type => [Job])
  @ManyToMany(_type => Job, job => job.graduates)
  @JoinTable({ name: 'graduate_job' })
  jobs: Job[]

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
