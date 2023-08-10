import * as Factory from 'factory.ts'
import { faker } from '@faker-js/faker'
import { City } from '~/city/entities/city.entity'
import { fakeState } from './fake-state'

export const fakeCity = Factory.Sync.makeFactory<City>({
  id: faker.datatype.uuid(),
  name: faker.address.cityName(),
  state: fakeState.build(),
  addresses: [],
  createdDate: new Date(),
  updatedDate: new Date(),
  deletedDate: new Date()
})
