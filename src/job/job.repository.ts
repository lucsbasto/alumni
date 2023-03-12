import { Injectable } from '@nestjs/common'
import { Repository, DataSource } from 'typeorm'
import { Job } from './entities/job.entity'

@Injectable()
export class JobRepository extends Repository<Job> {
  constructor (private dataSource: DataSource) {
    super(Job, dataSource.createEntityManager())
  }

  async findOneAndRelated (id: string): Promise<Job | null> {
    return this.findOne({
      where: { id },
      relations: {
        graduates: { user: { address: { city: { state: { country: true } } } } },
        company: {
          user: { address: { city: { state: { country: true } } } },
          address: { city: { state: { country: true } } }
        },
        skills: true
      }
    })
  }

  async findManyAndRelated (): Promise<Job[]> {
    return this.find({
      relations: {
        graduates: { user: { address: { city: { state: { country: true } } } } },
        company: {
          user: { address: { city: { state: { country: true } } } },
          address: { city: { state: { country: true } } }
        },
        skills: true
      }
    })
  }

  async findByGraduate (id: string): Promise<Job[]> {
    return this.find({ where: { graduates: { id } } })
  }
}
