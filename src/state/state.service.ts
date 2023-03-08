import { Injectable, NotFoundException } from '@nestjs/common'
import { CountryRepository } from '~/country/country.repository'
import { CreateStateInput } from './dto/create-state.input'
import { UpdateStateInput } from './dto/update-state.input'
import { State } from './entities/state.entity'
import { StateRepository } from './state.repository'

@Injectable()
export class StateService {
  constructor (
    private readonly repository: StateRepository,
    private readonly countryRepository: CountryRepository
  ) {}

  async create (input: CreateStateInput): Promise<State> {
    const country = await this.countryRepository.findOne({ where: { id: input.countryId } })
    if (!country) {
      throw new NotFoundException('Country not found')
    }
    console.log(input)
    return this.repository.save({
      ...input,
      country
    })
  }

  async findAll (): Promise<State[]> {
    return this.repository.findAllAndRelated()
  }

  async update (_input: UpdateStateInput): Promise<State | null> {
    await this.repository.update({ id: _input.id }, { ..._input })
    return this.repository.findOneBy({ id: _input.id })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
