import * as Factory from 'factory.ts'
import { faker } from '@faker-js/faker'
import { Address } from '~/address/entities/address.entity'
import { fakeCity } from './fake-city'

// Address factory
export const fakeAddress = Factory.Sync.makeFactory<Address>({
  id: faker.datatype.uuid(),
  block: faker.address.county(),
  number: faker.address.buildingNumber().toString(),
  street: faker.address.streetAddress(),
  zipcode: faker.address.zipCode(),
  city: fakeCity.build(),
  deletedDate: new Date(),
  updatedDate: new Date(),
  createdDate: new Date()
})
