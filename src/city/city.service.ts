import { Injectable } from '@nestjs/common'
import { NotFoundException } from '@nestjs/common/exceptions'
import { StateRepository } from '~/state/state.repository'
import { CityRepository } from './city.repository'
import { CreateCityInput } from './dto/create-city.input'
import { UpdateCityInput } from './dto/update-city.input'
import { City } from './entities/city.entity'

@Injectable()
export class CityService {
  constructor (
    private readonly repository: CityRepository,
    private readonly stateRepository: StateRepository
  ) {}

  async create (input: CreateCityInput): Promise<City | null> {
    const state = await this.stateRepository.findOneBy({ id: input.stateId })
    if (!state) {
      throw new NotFoundException('State not found')
    }
    return this.repository.save({
      ...input,
      state
    })
}

  async findAll (): Promise<City[]> {
    return this.repository.findAllAndRelated()
  }

  async update (_input: UpdateCityInput): Promise<City | null> {
    await this.repository.update({ id: _input.id }, { ..._input })
    return this.repository.findOne({ where: { id: _input.id } })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
