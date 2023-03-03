import { Injectable } from '@nestjs/common'
import { Repository, DataSource } from 'typeorm'
import { City } from './entities/city.entity'

@Injectable()
export class CityRepository extends Repository<City> {
  constructor (private dataSource: DataSource) {
    super(City, dataSource.createEntityManager())
  }
}
