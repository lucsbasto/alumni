import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CountryService } from './country.service'
import { CreateCountryInput } from './dto/create-country.input'
import { UpdateCountryInput } from './dto/update-country.input'
import { Country } from './entities/country.entity'

@Resolver()
export class CountryResolver {
  constructor (private readonly service: CountryService) {}

  @Query(() => [Country], { name: 'findAllCountry' })
  async list (): Promise<Country[]> {
    return this.service.findAll()
  }

  @Mutation(() => Country, { name: 'createCountry' })
  async create (@Args('createCountryInput') createCountryInput: CreateCountryInput): Promise<Country> {
    return this.service.create(createCountryInput)
  }

  @Mutation(() => Country, { name: 'updateCountry' })
  async update (@Args('updateCountryInput') updateCountryInput: UpdateCountryInput): Promise<Country | null> {
    return this.service.update(updateCountryInput)
  }

  @Mutation(() => Country, { name: 'deleteCountry' })
  async delete (@Args('id', { type: () => String }) id: string): Promise<void> {
    return this.service.delete(id)
  }
}
