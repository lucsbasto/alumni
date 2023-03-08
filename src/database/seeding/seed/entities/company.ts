import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Job, User, Address } from '.'

@Entity()
@ObjectType()
export class Company {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  cnpj: string

  @Field()
  @Column()
  name: string

  @Field(_type => User)
  @OneToOne(_type => User, { cascade: true })
  @JoinColumn({ name: 'userId' })
  user: User

  @Field(_type => Address)
  @OneToOne(_type => Address, { cascade: true })
  @JoinColumn({ name: 'addressId' })
  address: Address

  @Field(_type => Job)
  @OneToMany(_type => Job, jobs => jobs.company)
  jobs: Job

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
