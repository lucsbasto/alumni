import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { User, Job, Course } from '.'

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

  @Field()
  @Column()
  startGraduation: string

  @Field()
  @Column()
  endGraduation: string

  @Field(_type => [Course])
  @ManyToMany(_type => Course, course => course.graduates)
  @JoinTable({ name: 'graduate_courses' })
  courses: Course[]

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
