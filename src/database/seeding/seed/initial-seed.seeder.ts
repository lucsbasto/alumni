import { DataSource } from 'typeorm'
import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { Address, City, Country, State, User } from './entities'

export class InitialSeeder implements Seeder {
  public async run (
    dataSource: DataSource,
    _factoryManager: SeederFactoryManager
  ): Promise<any> {
    const countryRepository = dataSource.getRepository(Country)
    const stateRepository = dataSource.getRepository(State)
    const cityRepository = dataSource.getRepository(City)
    const addressRepository = dataSource.getRepository(Address)
    const userRepository = dataSource.getRepository(User)

    const brasil = await countryRepository.save({
      id: '90bb196e-59dc-44a7-82c2-f4850c9eb767',
      code: 'BR',
      name: 'Brasil'

    })

    const tocantins = await stateRepository.save({
      id: '052b11f4-d687-4d41-b120-6b6ed5862d86',
      country: brasil,
      name: 'Tocantins',
      UF: 'TO'
    })

    const palmas = await cityRepository.save({
      id: '9149c0f3-1465-4ed1-8e0d-246e51c32cdd',
      name: 'Palmas',
      state: tocantins
    })

    const home = await addressRepository.save({
      id: '86e5f619-4ed0-47a3-9689-9be1bfb94a47',
      city: palmas,
      block: '405 sul',
      number: '15',
      street: 'alameda 10',
      zipcode: '77015623'
    })

    await userRepository.save({
      id: '7d294a2f-d1e4-4528-b3b4-df1236adca48',
      address: home,
      birthdate: new Date('06/05/1995'),
      email: 'admin@gmail.com',
      isAdmin: true,
      firstName: 'Admin',
      lastName: 'Admin',
      phone: '+5563985021531',
      password: '123456789'
    })
  }
}
