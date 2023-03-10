import { Faker } from '@faker-js/faker'
import { setSeederFactory } from 'typeorm-extension'
import { Course, Graduate, User } from '../seed/entities'

export const graduateFactory = setSeederFactory(Graduate, (_faker: Faker) => {
  const graduate = new Graduate()
  graduate.startGraduation = '2015/2'
  graduate.endGraduation = '2018/2'
  graduate.courses = [new Course()]
  graduate.user = new User()
  return graduate
})
