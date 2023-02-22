import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateStateInput } from './dto/create-state.input'
import { UpdateStateInput } from './dto/update-state.input'
import { State } from './entities/state.entity'
import { StateService } from './state.service'

@Resolver()
export class StateResolver {
  constructor (private readonly service: StateService) {}

  @Query(() => [State], { name: 'findAllState' })
  async list (): Promise<State[]> {
    return this.service.findAll()
  }

  @Mutation(() => State, { name: 'createState' })
  async create (@Args('createStateInput') createStateInput: CreateStateInput): Promise<State> {
    return this.service.create(createStateInput)
  }

  @Mutation(() => State, { name: 'updateState' })
  async update (@Args('updateStateInput') updateStateInput: UpdateStateInput): Promise<State | null> {
    return this.service.update(updateStateInput)
  }

  @Mutation(() => State, { name: 'deleteState' })
  async delete (@Args('id', { type: () => String }) id: string): Promise<void> {
    return this.service.delete(id)
  }
}
