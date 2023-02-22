import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { AddressRepository } from './address.repository'
import { CreateAddressInput } from './dto/create-address.input'
import { UpdateAddressInput } from './dto/update-address.input'
import { Address } from './entities/address.entity'

@Injectable()
export class AddressService {
  constructor (
    @InjectRepository(Address)
    private readonly repository: AddressRepository
  ) {}

  async create (input: CreateAddressInput): Promise<Address> {
    return this.repository.save(input)
  }

  async findAll (): Promise<Address[]> {
    return this.repository.find()
  }

  async update (_input: UpdateAddressInput): Promise<Address | null> {
    const address = await this.repository.findOne({ where: { id: _input.id } })
    return address
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
