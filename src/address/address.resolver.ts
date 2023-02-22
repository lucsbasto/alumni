import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { AddressService } from './address.service'
import { CreateAddressInput } from './dto/create-address.input'
import { UpdateAddressInput } from './dto/update-address.input'
import { Address } from './entities/address.entity'

@Resolver()
export class AddressResolver {
  constructor (private readonly service: AddressService) {}

  @Query(() => [Address], { name: 'findAllAddress' })
  async list (): Promise<Address[]> {
    return this.service.findAll()
  }

  @Mutation(() => Address, { name: 'createAddress' })
  async create (@Args('createAddressInput') createAddressInput: CreateAddressInput): Promise<Address> {
    return this.service.create(createAddressInput)
  }

  @Mutation(() => Address, { name: 'updateAddress' })
  async update (@Args('updateAddressInput') updateAddressInput: UpdateAddressInput): Promise<Address | null> {
    return this.service.update(updateAddressInput)
  }

  @Mutation(() => Address, { name: 'deleteAddress' })
  async delete (@Args('id', { type: () => String }) id: string): Promise<void> {
    return this.service.delete(id)
  }
}
