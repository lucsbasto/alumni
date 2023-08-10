import { faker } from '@faker-js/faker'
import { UpdateAddressInput } from '~/address/dto/update-address.input'

export function fakeUpdateAddressDto (): UpdateAddressInput {
  const mockInput: UpdateAddressInput = {
    id: faker.datatype.uuid(),
    block: faker.address.streetPrefix(),
    street: faker.address.streetName(),
    zipcode: faker.address.zipCode(),
    cityId: faker.datatype.uuid(),
    number: faker.datatype.number().toString(),
    lot: faker.lorem.word(),
    complement: faker.lorem.sentence()
  }

  return mockInput
}
