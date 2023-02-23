import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { City } from '~/city/entities/city.entity'

@Entity()
@ObjectType()
export class Address {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  block: string

  @Field()
  @Column()
  street: string

  @Field()
  @Column()
  number: string

  @Field()
  @Column()
  zipcode: string

  @Field(_type => City)
  @ManyToOne(_type => City, city => city.addresses)
  city: City

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
