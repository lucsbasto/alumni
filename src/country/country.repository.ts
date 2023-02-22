import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Country } from './entities/country.entity'

@Injectable()
export class CountryRepository extends Repository<Country> {}
