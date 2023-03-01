import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Address, Course, User } from '../entities'

@Entity()
@ObjectType()
export class College {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field(_type => User)
  @OneToOne(_type => User)
  @JoinColumn({ name: 'userId' })
  user: User

  @Field()
  @Column()
  @Index({ unique: true })
  name: string

  @Field(_type => Address)
  @OneToOne(_type => Address)
  @JoinColumn({ name: 'addressId' })
  @Index({ unique: true })
  address: Address

  @Field(_type => [Course], { nullable: true })
  @OneToMany(_type => Course, course => course.college, { nullable: true })
  courses: Course[]

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
