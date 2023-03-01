import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { AddressRepository } from '~/address/address.repository'
import { Address } from '~/address/entities/address.entity'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'
import { User } from './entities/user.entity'
import { UserRepository } from './user.repository'
import { NotFoundException } from '@nestjs/common/exceptions'

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(User)
    private readonly repository: UserRepository,
    @InjectRepository(Address)
    private readonly addressRepository: AddressRepository
  ) {}

  async create (input: CreateUserInput): Promise<User> {
    const address = await this.addressRepository.findOneBy({ id: input.addressId })
    if (!address) {
      throw new NotFoundException('Address not found')
    }
    return this.repository.save({ ...input, birthdate: new Date(input.birthdate), address })
  }

  async findAll (): Promise<User[]> {
    return this.repository.find({ relations: ['address'] })
  }

  async update (_input: UpdateUserInput): Promise<User | null> {
    await this.repository.update({ id: _input.id }, { ..._input })
    return this.repository.findOneBy({ id: _input.id })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
