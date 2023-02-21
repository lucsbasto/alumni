import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateGraduateInput } from './dto/create-graduate.input';
import { UpdateGraduateInput } from './dto/update-graduate.input';
import { GraduateEntity } from './entities/graduate.entity';
import { GraduateService } from './graduate.service';

@Resolver()
export class GraduateResolver {
  constructor (private readonly graduateService: GraduateService) {}

  @Query(() => [GraduateEntity], { name: 'findAllGraduate' })
  async list (): Promise<GraduateEntity[]> {
    return this.graduateService.findAll();
  }

  @Mutation(() => GraduateEntity, { name: 'createGraduate' })
  async create (@Args('createGraduateInput') createGraduateInput: CreateGraduateInput): Promise<GraduateEntity> {
    return this.graduateService.create(createGraduateInput);
  }

  @Mutation(() => GraduateEntity, { name: 'updateGraduate' })
  async update (@Args('updateGraduateInput') updateGraduateInput: UpdateGraduateInput): Promise<GraduateEntity | null> {
    return this.graduateService.update(updateGraduateInput);
  }

  @Mutation(() => GraduateEntity, { name: 'deleteGraduate' })
  async delete (@Args('id', { type: () => Int }) id: number): Promise<void> {
    return this.graduateService.delete(id);
  }
}
