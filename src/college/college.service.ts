import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { AddressRepository } from '~/address/address.repository'
import { Address } from '~/address/entities/address.entity'
import { User } from '~/user/entities/user.entity'
import { UserRepository } from '~/user/user.repository'
import { CollegeRepository } from './college.repository'
import { CreateCollegeInput } from './dto/create-college.input'
import { UpdateCollegeInput } from './dto/update-college.input'
import { College } from './entities/college.entity'

@Injectable()
export class CollegeService {
  constructor (
    @InjectRepository(College)
    private readonly repository: CollegeRepository,
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
    @InjectRepository(Address)
    private readonly addressRepository: AddressRepository
  ) {}

  async create (input: CreateCollegeInput): Promise<College> {
    const address = await this.addressRepository.findOneBy({ id: input.addressId })
    const user = await this.userRepository.findOneBy({ id: input.userId })
    if (!address) {
      throw new NotFoundException('Address not found')
    }
    if (!user) {
      throw new NotFoundException('User not found')
    }
    return this.repository.save({ ...input, user, address })
  }

  async findAll (): Promise<College[]> {
    return this.repository.find({ relations: ['user', 'address'] })
  }

  async update (_input: UpdateCollegeInput): Promise<College | null> {
    await this.repository.update({ id: _input.id }, { ..._input })
    return this.repository.findOne({ where: { id: _input.id } })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
