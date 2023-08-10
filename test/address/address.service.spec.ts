import { AddressService } from '../../src/address/address.service'
import { NotFoundException } from '@nestjs/common/exceptions'
import { AddressRepository } from '../../src/address/address.repository'
import { CityRepository } from '~/city/city.repository'
import { CreateAddressInput } from '../../src/address/dto/create-address.input'
import { UpdateAddressInput } from '../../src/address/dto/update-address.input'
import { Address } from '../../src/address/entities/address.entity'
import { DataSource } from 'typeorm'
import { options, updateResult } from '../mocks/database-mocks'
import { fakeCity } from '../mocks/fake-city'
import { fakeAddress } from '../mocks/fake-address'
import { fakeCreateAddressDto } from '../mocks/dto/fake-create-address.dto'
import { fakeUpdateAddressDto } from '../mocks/dto/fake-update-address.dto'

describe('AddressService', () => {
  let addressService: AddressService
  let addressRepository: AddressRepository
  let cityRepository: CityRepository
  let dataSource: DataSource

  beforeEach(() => {
    dataSource = new DataSource(options)
    addressRepository = new AddressRepository(dataSource)
    cityRepository = new CityRepository(dataSource)
    addressService = new AddressService(addressRepository, cityRepository)
  })

  describe('create', () => {
    it('should create a new address', async () => {
      const input: CreateAddressInput = fakeCreateAddressDto()

      const city = fakeCity.build()
      jest.spyOn(cityRepository, 'findOne').mockResolvedValue(city)
      const createdAddress: Address = fakeAddress.build({ ...input, city })
      jest.spyOn(addressRepository, 'save').mockResolvedValue(createdAddress)

      const result = await addressService.create(input)

      expect(cityRepository.findOne).toHaveBeenCalledWith({ where: { id: input.cityId } })
      expect(addressRepository.save).toHaveBeenCalledWith({ ...input, city })
      expect(result).toEqual(createdAddress)
    })

    it('should throw NotFoundException if city is not found', async () => {
      const input: CreateAddressInput = fakeCreateAddressDto()
      jest.spyOn(cityRepository, 'findOne').mockResolvedValue(null)

      await expect(addressService.create(input)).rejects.toThrowError(NotFoundException)
      expect(cityRepository.findOne).toHaveBeenCalledWith({ where: { id: input.cityId } })
    })
  })

  describe('findAll', () => {
    it('should return all addresses with city relations', async () => {
      const addresses: Address[] = [

      ]

      jest.spyOn(addressRepository, 'find').mockResolvedValue(addresses)

      const result = await addressService.findAll()

      expect(addressRepository.find).toHaveBeenCalledWith({ relations: ['city'] })
      expect(result).toEqual(addresses)
    })
  })

  describe('findAllWithRelations', () => {
    it('should return all addresses with city relations', async () => {
      const addresses: Address[] = fakeAddress.buildList(3)

      jest.spyOn(addressRepository, 'find').mockResolvedValue(addresses)

      const result = await addressService.findAllWithRelations()

      expect(addressRepository.find).toHaveBeenCalledWith({ relations: ['city'] })
      expect(result).toEqual(addresses)
      expect(result.length).toEqual(3)
    })
  })

  describe('update', () => {
    it('should update and return the address if found', async () => {
      const input: UpdateAddressInput = fakeUpdateAddressDto()

      const addressToUpdate = fakeAddress.build()
      jest.spyOn(addressRepository, 'findOne').mockResolvedValue(addressToUpdate)

      jest.spyOn(addressRepository, 'update').mockResolvedValue(updateResult)

      const updatedAddress = { ...addressToUpdate, ...input }
      const result = await addressService.update(updatedAddress)

      expect(addressRepository.findOne).toHaveBeenCalledWith({ where: { id: input.id } })
      expect(addressRepository.update).toHaveBeenCalled()
      expect(result).toEqual(addressToUpdate)
    })

    it('should return null if the address is not found', async () => {
      const input: UpdateAddressInput = fakeUpdateAddressDto()
      const updatedAddress = fakeAddress.build()
      jest.spyOn(addressRepository, 'update').mockResolvedValue(updateResult)
      jest.spyOn(addressRepository, 'findOne').mockResolvedValue(updatedAddress)

      const result = await addressService.update(input)

      expect(addressRepository.update).toHaveBeenCalledWith(
        { id: input.id },
        { ...input }
      )
      expect(addressRepository.findOne).toHaveBeenCalledWith({
        where: { id: input.id }
      })
      expect(result).toEqual(updatedAddress)
    })
  })

  describe('delete', () => {
    it('should mark the address as deleted', async () => {
      const id = '1'

      jest.spyOn(addressRepository, 'update').mockResolvedValue(updateResult)

      await addressService.delete(id)

      expect(addressRepository.update).toHaveBeenCalledWith({ id }, { deletedDate: expect.any(Date) })
    })
  })
})
