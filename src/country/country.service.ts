import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CountryRepository } from './country.repository'
import { CreateCountryInput } from './dto/create-country.input'
import { UpdateCountryInput } from './dto/update-country.input'
import { Country } from './entities/country.entity'

@Injectable()
export class CountryService {
  constructor (
    @InjectRepository(Country)
    private readonly repository: CountryRepository
  ) {}

  async create (input: CreateCountryInput): Promise<Country> {
    return this.repository.save(input)
  }

  async findAll (): Promise<Country[]> {
    return this.repository.find()
  }

  async update (_input: UpdateCountryInput): Promise<Country | null> {
    const country = await this.repository.findOne({ where: { id: _input.id } })
    return country
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
