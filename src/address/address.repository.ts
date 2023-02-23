import { Injectable } from '@nestjs/common'
import { DataSource, Repository } from 'typeorm'
import { City } from '~/city/entities/city.entity'
import { Country } from '~/country/entities/country.entity'
import { State } from '~/state/entities/state.entity'
import { Address } from './entities/address.entity'

@Injectable()
export class AddressRepository extends Repository<Address> {
  constructor (private dataSource: DataSource) {
    super(Address, dataSource.createEntityManager())
}

  async findAllWithRelations (): Promise<Address[]> {
    return this.createQueryBuilder('address')
    .innerJoin(City, 'city')
    .innerJoin(State, 'state')
    .innerJoin(Country, 'country')
    .getRawMany()
  }
}
