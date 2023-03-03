import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { AddressRepository } from '~/address/address.repository'
import { Address } from '~/address/entities/address.entity'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { User } from './entities/user.entity'
import { UserRepository } from './user.repository'
import { InternalServerErrorException } from '@nestjs/common/exceptions'

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(User)
    private readonly repository: UserRepository,
    @InjectRepository(Address)
    private readonly addressRepository: AddressRepository
  ) {}

  async create (input: CreateUserInput): Promise<User> {
    const address = await this.addressRepository.create(input.address)
    if (!address) {
      throw new InternalServerErrorException('Address not created')
    }
    return this.repository.save({ ...input, birthdate: new Date(input.birthdate), address })
  }

  async findAll (): Promise<User[]> {
    return this.repository.find({ relations: ['address'] })
  }

  async update (input: UpdateUserInput): Promise<User | null> {
    await this.repository.update({ id: input.id }, { ...input })
    return this.repository.findOneBy({ id: input.id })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
