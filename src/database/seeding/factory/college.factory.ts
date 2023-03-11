import { Faker } from '@faker-js/faker'
import { setSeederFactory } from 'typeorm-extension'
import { Address, College, Course, User } from '../seed/entities'

export const collegeFactory = setSeederFactory(College, (faker: Faker) => {
  const college = new College()
  college.address = new Address()
  college.user = new User()
  college.name = faker.company.name()
  college.address = new Address()
  college.courses = [new Course()]
  return college
})
