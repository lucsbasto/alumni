import { Query, Mutation, Resolver, Args } from '@nestjs/graphql'
import { CreateJobInput } from './dto/create-job.input'
import { UpdateJobInput } from './dto/update-job.input'
import { Job } from './entities/job.entity'
import { JobService } from './job.service'

@Resolver()
export class JobResolver {
  constructor (private readonly service: JobService) {}

  @Query(() => [Job], { name: 'findAllJob' })
  async list (): Promise<Job[]> {
    return this.service.findAll()
  }

  @Mutation(() => Job, { name: 'createJob' })
  async create (@Args('createJobInput') createJobInput: CreateJobInput): Promise<Job> {
    return this.service.create(createJobInput)
  }

  @Mutation(() => Job, { name: 'updateJob' })
  async update (@Args('updateJobInput') updateJobInput: UpdateJobInput): Promise<Job | null> {
    return this.service.update(updateJobInput)
  }

  @Mutation(() => Job, { name: 'deleteJob' })
  async delete (@Args('id', { type: () => String }) id: string): Promise<void> {
    return this.service.delete(id)
  }
}