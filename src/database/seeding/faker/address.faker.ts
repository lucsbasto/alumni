import { faker } from '@faker-js/faker'
import { Address } from '../seed/entities'
import { cityFaker } from './city.faker'

export const addressFaker = (): Address => {
  const address = new Address()
  address.block = faker.address.county()
  address.number = faker.address.buildingNumber()
  address.street = faker.address.streetAddress()
  address.zipcode = faker.address.zipCode()
  address.city = cityFaker()
  return address
}
