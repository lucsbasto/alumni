import { Faker } from '@faker-js/faker'
import { setSeederFactory } from 'typeorm-extension'
import { addressFaker } from '../faker/address.faker'
import { userFaker } from '../faker/user.faker'
import { Company } from '../seed/entities'

export const companyFactory = setSeederFactory(Company, (faker: Faker) => {
  const company = new Company()
  company.address = addressFaker()
  company.cnpj = String(new Date().getTime())
  company.name = faker.company.name()
  company.user = userFaker()
  return company
})
