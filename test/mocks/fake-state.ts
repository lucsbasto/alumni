import * as Factory from 'factory.ts'
import { faker } from '@faker-js/faker'
import { State } from '~/state/entities/state.entity'
import { fakeCountry } from './fake-country'
import { fakeCity } from './fake-city'

// State factory
export const fakeState = Factory.Sync.makeFactory<State>({
  id: faker.datatype.uuid(),
  name: faker.address.state(),
  UF: faker.address.stateAbbr(),
  country: fakeCountry(),
  cities: [fakeCity],
  createdDate: new Date(),
  updatedDate: new Date(),
  deletedDate: new Date()
})
