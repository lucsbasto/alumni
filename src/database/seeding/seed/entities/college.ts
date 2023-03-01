import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Address, Major, User } from '../entities'

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

  @Field(_type => [Major], { nullable: true })
  @OneToMany(_type => Major, major => major.college, { nullable: true })
  majors: Major[]

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}