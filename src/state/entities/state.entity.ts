import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Index } from 'typeorm/decorator/Index'
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne'
import { OneToMany } from 'typeorm/decorator/relations/OneToMany'
import { City } from '~/city/entities/city.entity'
import { Country } from '~/country/entities/country.entity'

@Entity()
@ObjectType()
@Index(['name', 'UF', 'country'], { unique: true })
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
  @ManyToOne(_type => Country, country => country.states)
  country: Country

  @Field(_type => [City])
  @OneToMany(_type => City, _state => State, { cascade: true })
  cities: City[]

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
