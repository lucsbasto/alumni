import { Injectable } from '@nestjs/common'
import { Repository, DataSource } from 'typeorm'
import { Country } from './entities/country.entity'

@Injectable()
export class CountryRepository extends Repository<Country> {
  constructor (private dataSource: DataSource) {
    super(Country, dataSource.createEntityManager())
  }
}
