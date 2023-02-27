import { Faker } from '@faker-js/faker'
import { setSeederFactory } from 'typeorm-extension'
import { Address, User } from '../seed/entities'

export const usersFactory = setSeederFactory(User, (faker: Faker) => {
  const user = new User()
  user.firstName = faker.name.firstName()
  user.lastName = faker.name.lastName()
  user.birthday = faker.date.birthdate({ min: 18 })
  user.email = faker.internet.email()
  user.password = faker.internet.password()
  user.phone = faker.phone.number()
  user.address = new Address()
  user.isAdmin = false
  return user
})
