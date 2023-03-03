import { Injectable } from '@nestjs/common'
import { Repository, DataSource } from 'typeorm'
import { Address } from './entities/address.entity'

@Injectable()
export class AddressRepository extends Repository<Address> {
  constructor (private dataSource: DataSource) {
    super(Address, dataSource.createEntityManager())
  }
}
