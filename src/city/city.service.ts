import { Injectable } from '@nestjs/common'
import { NotFoundException } from '@nestjs/common/exceptions'
import { InjectRepository } from '@nestjs/typeorm'
import { State } from '~/state/entities/state.entity'
import { StateRepository } from '~/state/state.repository'
import { CityRepository } from './city.repository'
import { CreateCityInput } from './dto/create-city.input'
import { UpdateCityInput } from './dto/update-city.input'
import { City } from './entities/city.entity'

@Injectable()
export class CityService {
  constructor (
    @InjectRepository(City)
    private readonly repository: CityRepository,
    @InjectRepository(State)
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
    return this.repository.find({
      relations: ['state']
    })
  }

  async update (_input: UpdateCityInput): Promise<City | null> {
    await this.repository.update({ id: _input.id }, { ..._input })
    return this.repository.findOne({ where: { id: _input.id } })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
