import { Injectable } from '@nestjs/common'
import { DataSource, Repository } from 'typeorm'
import { Company } from './entities/company.entity'

@Injectable()
export class CompanyRepository extends Repository<Company> {
  constructor (private dataSource: DataSource) {
      super(Company, dataSource.createEntityManager())
  }

  async findAllWithRelations (): Promise<Company[]> {
    return this.createQueryBuilder('company')
    .leftJoinAndSelect('company.user', 'user')
    .leftJoinAndSelect('user.address', 'address')
    .leftJoinAndSelect('address.city', 'city')
    .leftJoinAndSelect('city.state', 'state')
    .leftJoinAndSelect('state.country', 'country')
    .leftJoinAndSelect('company.jobs', 'job')
    .leftJoinAndSelect('job.skills', 'skills')
    .getMany()
  }
}
