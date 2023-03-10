import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Address, Course, User } from '../entities'

@Entity()
export class College {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @OneToOne(_type => User, { cascade: true })
  @JoinColumn({ name: 'userId' })
  user: User

  @Column()
  name: string

  @OneToOne(_type => Address, { cascade: true })
  @JoinColumn({ name: 'addressId' })
  address: Address

  @OneToMany(_type => Course, course => course.college, { nullable: true })
  courses: Course[]

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
