import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CountryRepository } from '~/country/country.repository'
import { Country } from '~/country/entities/country.entity'
import { CreateStateInput } from './dto/create-state.input'
import { UpdateStateInput } from './dto/update-state.input'
import { State } from './entities/state.entity'
import { StateRepository } from './state.repository'

@Injectable()
export class StateService {
  constructor (
    @InjectRepository(State)
    private readonly repository: StateRepository,
    @InjectRepository(Country)
    private readonly countryRepository: CountryRepository
  ) {}

  async create (input: CreateStateInput): Promise<State> {
    const country = await this.countryRepository.findOneBy({ id: input.countryId })
    if (!country) {
      throw new NotFoundException('Country not found')
    }
    return this.repository.save({
      ...input,
      country
    })
  }

  async findAll (): Promise<State[]> {
    return this.repository.find({
      relations: ['country']
    })
  }

  async update (_input: UpdateStateInput): Promise<State | null> {
    await this.repository.update({ id: _input.id }, { ..._input })
    return this.repository.findOneBy({ id: _input.id })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
