import { Injectable, NotFoundException } from '@nestjs/common'
import { AddressRepository } from '~/address/address.repository'
import { UserRepository } from '~/user/user.repository'
import { CollegeRepository } from './college.repository'
import { CreateCollegeInput } from './dto/create-college.input'
import { UpdateCollegeInput } from './dto/update-college.input'
import { College } from './entities/college.entity'

@Injectable()
export class CollegeService {
  constructor (
    private readonly repository: CollegeRepository,
    private readonly userRepository: UserRepository,
    private readonly addressRepository: AddressRepository
  ) {}

  async create (input: CreateCollegeInput): Promise<College> {
    const address = await this.addressRepository.findOneBy({ id: input.addressId })
    if (!address) {
      throw new NotFoundException('Address not found')
    }
    const user = await this.userRepository.findOneBy({ id: input.userId })
    if (!user) {
      throw new NotFoundException('User not found')
    }
    return this.repository.save({ ...input, user, address })
  }

  async findAll (): Promise<College[]> {
    return this.repository.findAllAndRelated()
  }

  async findByName (name: string): Promise<College | null> {
    return this.repository.findByName(name)
  }

  async findOne (id: string): Promise<College | null> {
    return this.repository.findOneAndRelated(id)
  }

  async update (_input: UpdateCollegeInput): Promise<College | null> {
    await this.repository.update({ id: _input.id }, { ..._input })
    return this.repository.findOne({ where: { id: _input.id } })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
