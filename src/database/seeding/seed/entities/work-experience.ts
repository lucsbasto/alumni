import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class WorkExperience {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  type: string

  @Column()
  companyName: string

  @Column()
  startDate: string

  @Column()
  endDate: string

  @Column()
  description: string

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
