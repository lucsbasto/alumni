import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateGraduateInput } from './dto/create-graduate.input'
import { FilterGraduateInput } from './dto/filter-graduate.input'
import { UpdateGraduateInput } from './dto/update-graduate.input'
import { Graduate } from './entities/graduate.entity'
import { GraduateService } from './graduate.service'

@Resolver()
export class GraduateResolver {
  constructor (private readonly graduateService: GraduateService) {}

  @Query(() => [Graduate], { name: 'findAllGraduate' })
  async list (@Args('filterGraduateInput') filterGraduateInput: FilterGraduateInput): Promise<Graduate[]> {
    return this.graduateService.findAll(filterGraduateInput)
  }

  @Mutation(() => Graduate, { name: 'createGraduate' })
  async create (@Args('createGraduateInput') createGraduateInput: CreateGraduateInput): Promise<Graduate> {
    return this.graduateService.create(createGraduateInput)
  }

  @Mutation(() => Graduate, { name: 'updateGraduate' })
  async update (@Args('updateGraduateInput') updateGraduateInput: UpdateGraduateInput): Promise<Graduate | null> {
    return this.graduateService.update(updateGraduateInput)
  }

  @Mutation(() => Graduate, { name: 'deleteGraduate' })
  async delete (@Args('id', { type: () => Int }) id: string): Promise<void> {
    return this.graduateService.delete(id)
  }
}
