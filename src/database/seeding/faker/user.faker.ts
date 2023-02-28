import { faker } from '@faker-js/faker'
import { User } from '../seed/entities'
import { addressFaker } from './address.faker'

export const userFaker = (): User => {
  const user = new User()
  user.birthday = faker.date.birthdate({ min: 18 })
  user.email = faker.internet.email()
  user.firstName = faker.name.firstName()
  user.lastName = faker.name.lastName()
  user.password = faker.internet.password()
  user.isAdmin = false
  user.phone = faker.phone.number()
  user.address = addressFaker()
  return user
}
