import { faker } from '@faker-js/faker'
import { CreateAddressInput } from '~/address/dto/create-address.input'

export const fakeCreateAddressDto = (): CreateAddressInput => {
  const mockInput: CreateAddressInput = {
    block: faker.address.streetAddress(),
    street: faker.address.street(),
    zipcode: faker.address.zipCode(),
    cityId: faker.datatype.uuid(),
    number: faker.datatype.number().toString()
  }

  return mockInput
}
