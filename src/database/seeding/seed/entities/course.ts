import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { College, Graduate, Skill } from '.'

@Entity()
@ObjectType()

@Index(['name', 'degree', 'description'], { unique: true })
export class Course {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  degree: string

  @Field()
  @Column()
  description: string

  @Field(_type => College)
  @ManyToOne(_type => College, college => college.courses)
  @JoinColumn({ name: 'collegeId' })
  college: College

  @Field(_type => [Skill], { nullable: true })
  @OneToMany(_type => Skill, skill => skill.course, { nullable: true })
  skills: Skill[]

  @Field(_type => [Graduate])
  @ManyToMany(_type => Graduate, graduate => graduate.courses)
  graduates: Graduate[]

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
