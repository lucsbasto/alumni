import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CollegeService } from './college.service'
import { CreateCollegeInput } from './dto/create-college.input'
import { UpdateCollegeInput } from './dto/update-college.input'
import { College } from './entities/college.entity'

@Resolver()
export class CollegeResolver {
  constructor (private readonly service: CollegeService) {}

  @Query(() => [College], { name: 'findAllCollege' })
  async list (): Promise<College[]> {
    return this.service.findAll()
  }

  @Query(() => College, { name: 'findCollegeByName' })
  async findByName (@Args('name') name: string): Promise<College | null> {
    return this.service.findByName(name)
  }

  @Mutation(() => College, { name: 'createCollege' })
  async create (@Args('createCollegeInput') createCollegeInput: CreateCollegeInput): Promise<College> {
    return this.service.create(createCollegeInput)
  }

  @Mutation(() => College, { name: 'updateCollege' })
  async update (@Args('updateCollegeInput') updateCollegeInput: UpdateCollegeInput): Promise<College | null> {
    return this.service.update(updateCollegeInput)
  }

  @Mutation(() => College, { name: 'deleteCollege' })
  async delete (@Args('id', { type: () => String }) id: string): Promise<void> {
    return this.service.delete(id)
  }
}
