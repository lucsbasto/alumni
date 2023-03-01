import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Job } from '~/job/entities/job.entity'
import { Major } from '~/major/entities/major.entity'
import { User } from '~/user/entities/user.entity'

@Entity()
@ObjectType()
export class Graduate {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field(_type => User)
  @OneToOne(_type => User)
  @JoinColumn({ name: 'userId' })
  user: User

  @Field()
  @Column()
  startGraduation: string

  @Field()
  @Column()
  endGraduation: string

  @Field(_type => [Major])
  @ManyToMany(_type => Major, major => major.graduates)
  @JoinTable({ name: 'graduate_major' })
  majors: Major[]

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
