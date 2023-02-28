import { faker } from '@faker-js/faker'
import { City } from '../seed/entities'
import { stateFaker } from './state.faker'

export const cityFaker = (): City => {
  const city = new City()
  city.name = faker.address.cityName()
  city.state = stateFaker()
  return city
}
