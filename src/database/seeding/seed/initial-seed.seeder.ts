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
      code: 'BR',
      name: 'Brasil'

    })

    const tocantins = await stateRepository.save({
      country: brasil,
      name: 'Tocantins',
      UF: 'TO'
    })

    const palmas = await cityRepository.save({
      name: 'Palmas',
      state: tocantins
    })

    const home = await addressRepository.save({
      city: palmas,
      block: '405 sul',
      number: '15',
      street: 'alameda 10',
      zipcode: '77015623'
    })

    await userRepository.save({
      address: home,
      birthday: new Date('06/05/1995'),
      email: 'lucsbasto@gmail.com',
      isAdmin: true,
      firstName: 'Lucas',
      lastName: 'Bastos',
      phone: '+5563985021531',
      password: '123456789'
    })
  }
}
