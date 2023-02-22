import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { User } from './entities/user.entity'
import { UserService } from './user.service'

@Resolver()
export class UserResolver {
  constructor (private readonly service: UserService) {}

  @Query(() => [User], { name: 'findAllUser' })
  async list (): Promise<User[]> {
    return this.service.findAll()
  }

  @Mutation(() => User, { name: 'createUser' })
  async create (@Args('createUserInput') createUserInput: CreateUserInput): Promise<User> {
    return this.service.create(createUserInput)
  }

  @Mutation(() => User, { name: 'updateUser' })
  async update (@Args('updateUserInput') updateUserInput: UpdateUserInput): Promise<User | null> {
    return this.service.update(updateUserInput)
  }

  @Mutation(() => User, { name: 'deleteUser' })
  async delete (@Args('id', { type: () => String }) id: string): Promise<void> {
    return this.service.delete(id)
  }
}
