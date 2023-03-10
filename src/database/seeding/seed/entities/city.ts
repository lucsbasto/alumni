import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Address, State } from '../entities'

@Entity()
@ObjectType()
@Index(['name', 'state.id'], { unique: true })
export class City {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string

  @Field(_type => State)
  @OneToOne(_type => State, _city => City, { cascade: true })
  @JoinColumn({ name: 'stateId' })
  state: State

  @Field(_type => Address)
  @OneToMany(_type => Address, address => address.city)
  addresses: Address[]

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
