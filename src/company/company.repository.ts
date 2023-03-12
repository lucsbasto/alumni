import { Injectable } from '@nestjs/common'
import { DataSource, Repository } from 'typeorm'
import { Company } from './entities/company.entity'

@Injectable()
export class CompanyRepository extends Repository<Company> {
  constructor (private dataSource: DataSource) {
      super(Company, dataSource.createEntityManager())
  }

  async findAllWithRelations (): Promise<Company[]> {
    return this.find({
      relations: {
        address: { city: { state: { country: true } } },
        user: { address: { city: { state: { country: true } } } },
        jobs: true
      }
    })
  }

  async findOneWithRelations (id: string): Promise<Company | null> {
    return this.findOne({
      where: { id },
      relations: {
        address: { city: { state: { country: true } } },
        user: { address: { city: { state: { country: true } } } },
        jobs: true
      }
    })
  }
}
