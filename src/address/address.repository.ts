import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Address } from './entities/address.entity'

@Injectable()
export class AddressRepository extends Repository<Address> {}
