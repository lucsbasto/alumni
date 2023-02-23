import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { College } from '~/college/entities/college.entity'

@Entity()
@ObjectType()

@Index(['name', 'degree', 'description'], { unique: true })
export class Major {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  degree: string

  @Field()
  @Column()
  description: string

  @Field(_type => College)
  @ManyToOne(_type => College, college => college.majors)
  college: College

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date
}
