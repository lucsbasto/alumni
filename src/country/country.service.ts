import { Injectable } from '@nestjs/common'
import { CountryRepository } from './country.repository'
import { CreateCountryInput } from './dto/create-country.input'
import { UpdateCountryInput } from './dto/update-country.input'
import { Country } from './entities/country.entity'

@Injectable()
export class CountryService {
  constructor (
    private readonly repository: CountryRepository
  ) {}

  async create (input: CreateCountryInput): Promise<Country> {
    return this.repository.save(input)
  }

  async findAll (): Promise<Country[]> {
    return this.repository.find()
  }

  async update (_input: UpdateCountryInput): Promise<Country | null> {
    await this.repository.update({ id: _input.id }, { ..._input })
    return this.repository.findOne({ where: { id: _input.id } })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
