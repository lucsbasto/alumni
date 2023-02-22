import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Address } from '~/address/entities/address.entity'

@Entity()
@ObjectType()
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  firstName: string

  @Field()
  @Column()
  lastName: string

  @Field()
  @Column()
  email: string

  @Field()
  @Column()
  phone: string

  @Field()
  @Column()
  password: string

  @Field()
  @Column()
  isAdmin: boolean

  @Field()
  @OneToOne(_type => Address)
  address: Address

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}