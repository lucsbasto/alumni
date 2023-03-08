import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne'
import { Address } from '~/address/entities/address.entity'
import { State } from '~/state/entities/state.entity'

@Entity()
@ObjectType()
@Index(['name', 'state'], { unique: true })
export class City {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string

  @Field(_type => State)
  @ManyToOne(_type => State, state => state.cities)
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
