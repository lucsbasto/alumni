import { Faker } from '@faker-js/faker'
import { setSeederFactory } from 'typeorm-extension'
import { Address, City } from '../seed/entities'

export const addressFactory = setSeederFactory(Address, (faker: Faker) => {
  const address = new Address()
  address.block = faker.address.county()
  address.number = faker.address.buildingNumber()
  address.street = faker.address.streetAddress()
  address.zipcode = faker.address.zipCode()
  address.city = new City()
  return address
})
