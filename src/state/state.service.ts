import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateStateInput } from './dto/create-state.input'
import { UpdateStateInput } from './dto/update-state.input'
import { State } from './entities/state.entity'
import { StateRepository } from './state.repository'

@Injectable()
export class StateService {
  constructor (
    @InjectRepository(State)
    private readonly repository: StateRepository
  ) {}

  async create (input: CreateStateInput): Promise<State> {
    return this.repository.save(input)
  }

  async findAll (): Promise<State[]> {
    return this.repository.find()
  }

  async update (_input: UpdateStateInput): Promise<State | null> {
    await this.repository.update({ id: _input.id }, { ..._input })
    return this.repository.findOneBy({ id: _input.id })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
