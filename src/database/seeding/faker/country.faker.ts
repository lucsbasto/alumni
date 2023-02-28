import { faker } from '@faker-js/faker'
import { Country } from '../seed/entities'

export const countryFaker = (): Country => {
  const country = new Country()
  country.name = faker.address.country()
  country.code = faker.address.countryCode()

  return country
}
