import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Address } from '~/address/entities/address.entity'
import { Course } from '~/course/entities/course.entity'
import { User } from '~/user/entities/user.entity'

@Entity()
@ObjectType()
export class College {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field(_type => User)
  @OneToOne(_type => User, { cascade: true })
  @JoinColumn({ name: 'userId' })
  user: User

  @Field()
  @Column()
  @Index({ unique: true })
  name: string

  @Field(_type => Address)
  @OneToOne(_type => Address, { cascade: true })
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
