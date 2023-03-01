import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { City, Country } from '../entities'

@Entity()
export class State {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ length: 2 })
  UF: string

  @OneToOne(_type => Country, _state => State)
  @JoinColumn({ name: 'countryId' })
  country: Country

  @OneToOne(_type => City, _state => State)
  city: City

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
