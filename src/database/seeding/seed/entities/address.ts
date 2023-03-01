import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { City } from '../entities'

@Entity()
@Index(['block', 'street', 'number', 'zipcode', 'city.id'], { unique: true })
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  block: string

  @Column()
  street: string

  @Column()
  number: string

  @Column()
  zipcode: string

  @ManyToOne(_type => City, city => city.addresses)
  city: City

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
