import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { City, Country } from '.'

@Entity()
@ObjectType()
export class State {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string

  @Field()
  @Column({ length: 2 })
  UF: string

  @Field(_type => Country)
  @OneToOne(_type => Country, _state => State)
  @JoinColumn({ name: 'countryId' })
  country: Country

  @Field(_type => City)
  @OneToOne(_type => City, _state => State)
  city: City

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
