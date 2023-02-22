import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CityRepository } from './city.repository'
import { CreateCityInput } from './dto/create-city.input'
import { UpdateCityInput } from './dto/update-city.input'
import { City } from './entities/city.entity'

@Injectable()
export class CityService {
  constructor (
    @InjectRepository(City)
    private readonly repository: CityRepository
  ) {}

  async create (input: CreateCityInput): Promise<City> {
    return this.repository.save(input)
  }

  async findAll (): Promise<City[]> {
    return this.repository.find()
  }

  async update (_input: UpdateCityInput): Promise<City | null> {
    await this.repository.update({ id: _input.id }, { ..._input })
    return this.repository.findOne({ where: { id: _input.id } })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
