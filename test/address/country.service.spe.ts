import { DataSource, UpdateResult } from 'typeorm'
import { CountryRepository } from '~/country/country.repository'
import { CountryService } from '~/country/country.service'
import { CreateCountryInput } from '~/country/dto/create-country.input'
import { Country } from '~/country/entities/country.entity'
import { options } from '../mocks/database-mocks'
import { UpdateCountryInput } from '~/country/dto/update-country.input'
import { fakeCountry } from '../mocks/fake-country'

const updateResult: UpdateResult = {
  affected: 1,
  raw: {},
  generatedMaps: []
}

describe('CountryService', () => {
  let countryService: CountryService
  let countryRepository: CountryRepository
  let dataSource: DataSource

  beforeEach(() => {
    dataSource = new DataSource(options)
    countryRepository = new CountryRepository(dataSource)
    countryService = new CountryService(countryRepository)
  })

  describe('create', () => {
    it('should create a new country', async () => {
      const input: CreateCountryInput = {
        name: 'Test Country',
        code: 'TC'
      }

      const createdCountry: Country = fakeCountry()
      jest.spyOn(countryRepository, 'save').mockResolvedValue(createdCountry)

      const result = await countryService.create(input)

      expect(countryRepository.save).toHaveBeenCalledWith(input)
      expect(result).toEqual(createdCountry)
    })
  })

  describe('findAll', () => {
    it('should return all countries', async () => {
      const countries: Country[] = [
        fakeCountry(),
        fakeCountry()
      ]

      jest.spyOn(countryRepository, 'find').mockResolvedValue(countries)

      const result = await countryService.findAll()

      expect(countryRepository.find).toHaveBeenCalled()
      expect(result).toEqual(countries)
    })
  })

  describe('update', () => {
    it('should update a country', async () => {
      const input: UpdateCountryInput = {
        id: '1',
        name: 'Updated Country',
        code: 'UC'
      }

      const updatedCountry: Country = fakeCountry()

      jest.spyOn(countryRepository, 'update').mockResolvedValue(updateResult)
      jest.spyOn(countryRepository, 'findOne').mockResolvedValue(updatedCountry)

      const result = await countryService.update(input)

      expect(countryRepository.update).toHaveBeenCalledWith(
        { id: input.id },
        { ...input }
      )
      expect(countryRepository.findOne).toHaveBeenCalledWith({
        where: { id: input.id }
      })
      expect(result).toEqual(updatedCountry)
    })
  })

  describe('delete', () => {
    it('should delete a country', async () => {
      const id = '1'

      jest.spyOn(countryRepository, 'update').mockResolvedValue(updateResult)

      await countryService.delete(id)

      expect(countryRepository.update).toHaveBeenCalledWith(
        { id },
        { deletedDate: expect.any(Date) }
      )
    })
  })
})
