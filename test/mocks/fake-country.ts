import { faker } from '@faker-js/faker'
import { Country } from '~/country/entities/country.entity'

export const fakeCountry = (): Country => {
  const country = new Country()
  country.name = faker.address.country()
  country.code = faker.address.countryCode()
  country.createdDate = new Date()
  country.updatedDate = new Date()
  country.deletedDate = new Date()
  return country
}
