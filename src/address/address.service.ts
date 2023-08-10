import { Injectable } from '@nestjs/common'
import { NotFoundException } from '@nestjs/common/exceptions'
import { CityRepository } from '~/city/city.repository'
import { AddressRepository } from './address.repository'
import { CreateAddressInput } from './dto/create-address.input'
import { UpdateAddressInput } from './dto/update-address.input'
import { Address } from './entities/address.entity'

@Injectable()
export class AddressService {
  constructor (
    private readonly repository: AddressRepository,
    private readonly cityRepository: CityRepository
  ) {}

  async create (input: CreateAddressInput): Promise<Address> {
    const city = await this.cityRepository.findOne({ where: { id: input.cityId } })
    if (!city) {
      throw new NotFoundException('City not found')
    }

    return this.repository.save({ ...input, city })
  }

  async findAll (): Promise<Address[]> {
    return this.repository.find({ relations: ['city'] })
  }

  async findAllWithRelations (): Promise<Address[]> {
    return await this.repository.find({ relations: ['city'] })
  }

  async update (_input: UpdateAddressInput): Promise<Address | null> {
    await this.repository.update({ id: _input.id }, { ..._input })
    return this.repository.findOne({ where: { id: _input.id } })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
