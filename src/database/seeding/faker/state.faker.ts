import { faker } from '@faker-js/faker'
import { State } from '../seed/entities'
import { countryFaker } from './country.faker'

export const stateFaker = (): State => {
  const state = new State()
  state.name = faker.address.state()
  state.UF = faker.address.stateAbbr()
  state.country = countryFaker()
  return state
}
