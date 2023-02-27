import { Faker } from '@faker-js/faker'
import { setSeederFactory } from 'typeorm-extension'
import { Graduate, User } from '../seed/entities'

export const graduateFactory = setSeederFactory(Graduate, (_faker: Faker) => {
  const graduate = new Graduate()
  graduate.startGraduation = '2018/2'
  graduate.user = new User()
  return graduate
})
