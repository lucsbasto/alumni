import { Injectable } from '@nestjs/common'
import { DataSource, Repository } from 'typeorm'
import { FilterGraduateInput } from './dto/filter-graduate.input'
import { Graduate } from './entities/graduate.entity'

@Injectable()
export class GraduateRepository extends Repository<Graduate> {
  constructor (private dataSource: DataSource) {
      super(Graduate, dataSource.createEntityManager())
  }

  async findByFilter (filter: FilterGraduateInput): Promise<Graduate[]> {
    const query = this.createQueryBuilder('graduate')
    .leftJoinAndSelect('graduate.user', 'user')
    .leftJoinAndSelect('user.address', 'address')
    .leftJoinAndSelect('address.city', 'city')
    .leftJoinAndSelect('city.state', 'state')
    .leftJoinAndSelect('state.country', 'country')
    .leftJoinAndSelect('graduate.courses', 'course')
    .leftJoinAndSelect('graduate.jobs', 'jobs')
    .leftJoinAndSelect('jobs.skills', 'skills')
    if (filter.cityId) {
      query.where('city.id = :cityId', { cityId: filter.cityId })
    }
    const teste = await query.getMany()
    return teste
  }
}
