import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateMajorInput } from './dto/create-major.input'
import { UpdateMajorInput } from './dto/update-major.input'
import { Major } from './entities/major.entity'
import { MajorService } from './major.service'

@Resolver()
export class MajorResolver {
  constructor (private readonly service: MajorService) {}

  @Query(() => [Major], { name: 'findAllMajor' })
  async list (): Promise<Major[]> {
    return this.service.findAll()
  }

  @Mutation(() => Major, { name: 'createMajor' })
  async create (@Args('createMajorInput') createMajorInput: CreateMajorInput): Promise<Major> {
    return this.service.create(createMajorInput)
  }

  @Mutation(() => Major, { name: 'updateMajor' })
  async update (@Args('updateMajorInput') updateMajorInput: UpdateMajorInput): Promise<Major | null> {
    return this.service.update(updateMajorInput)
  }

  @Mutation(() => Major, { name: 'deleteMajor' })
  async delete (@Args('id', { type: () => String }) id: string): Promise<void> {
    return this.service.delete(id)
  }
}
