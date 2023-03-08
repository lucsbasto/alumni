import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Index } from 'typeorm/decorator/Index'
import { State } from '~/state/entities/state.entity'

@Entity()
@ObjectType()
@Index(['name', 'code'], { unique: true })
export class Country {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  code: string

  @Field(_type => [State], { nullable: true })
  @OneToMany(_type => State, state => state.country, { nullable: true })
  states: State[]

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
