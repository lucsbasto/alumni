import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CityService } from './city.service'
import { CreateCityInput } from './dto/create-city.input'
import { UpdateCityInput } from './dto/update-city.input'
import { City } from './entities/city.entity'

@Resolver()
export class CityResolver {
  constructor (private readonly service: CityService) {}

  @Query(() => [City], { name: 'findAllCity' })
  async list (): Promise<City[]> {
    return this.service.findAll()
  }

  @Mutation(() => City, { name: 'createCity' })
  async create (@Args('createCityInput') createCityInput: CreateCityInput): Promise<City | null> {
    return this.service.create(createCityInput)
  }

  @Mutation(() => City, { name: 'updateCity' })
  async update (@Args('updateCityInput') updateCityInput: UpdateCityInput): Promise<City | null> {
    return this.service.update(updateCityInput)
  }

  @Mutation(() => City, { name: 'deleteCity' })
  async delete (@Args('id', { type: () => String }) id: string): Promise<void> {
    return this.service.delete(id)
  }
}
