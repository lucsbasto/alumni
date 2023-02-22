import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { User } from './entities/user.entity'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(User)
    private readonly repository: UserRepository
  ) {}

  async create (input: CreateUserInput): Promise<User> {
    return this.repository.save(input)
  }

  async findAll (): Promise<User[]> {
    return this.repository.find()
  }

  async update (_input: UpdateUserInput): Promise<User | null> {
    await this.repository.update({ id: _input.id }, { ..._input })
    return this.repository.findOneBy({ id: _input.id })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
