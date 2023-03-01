import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { College } from '~/college/entities/college.entity'
import { Graduate } from '~/graduate/entities/graduate.entity'
import { Skill } from '~/skill/entities/skill.entity'

@Entity()
@ObjectType()
@Index(['name', 'degree', 'description'], { unique: true })
export class Major {
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
  @ManyToOne(_type => College, college => college.majors)
  @JoinColumn({ name: 'collegeId' })
  college: College

  @Field(_type => [Skill], { nullable: true })
  @OneToMany(_type => Skill, skill => skill.major, { nullable: true })
  skills: Skill[]

  @Field(_type => [Graduate])
  @ManyToMany(_type => Graduate, graduate => graduate.majors)
  graduates: Graduate[]

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
