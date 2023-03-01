import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { State } from '../entities'

@Entity()
export class Country {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  code: string

  @OneToMany(_type => State, state => state.country, { nullable: true })
  state: State[]

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
