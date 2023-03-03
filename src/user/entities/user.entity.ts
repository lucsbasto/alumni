import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
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

  @Field(_type => Date)
  @Column()
  birthdate: Date

  @Field()
  @OneToOne(_type => Address, { cascade: true })
  @JoinColumn({ name: 'addressId' })
  address: Address

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
