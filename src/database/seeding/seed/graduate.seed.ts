import { DataSource } from 'typeorm'
import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { Address, City, Graduate, User } from './entities'

export class GraduateSeeder implements Seeder {
  public async run (
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const cityRepository = dataSource.getRepository(City)
    const addressRepository = dataSource.getRepository(Address)
    const graduateRepository = dataSource.getRepository(Graduate)
    const userRepository = dataSource.getRepository(User)

    const addressFactory = factoryManager.get(Address)
    const usersFactory = factoryManager.get(User)
    const graduateFactory = factoryManager.get(Graduate)
    const city = (await cityRepository.find({})).at(0)
    const address = await addressRepository.save(await addressFactory.make(city))
    const user = await userRepository.save(await usersFactory.make(address))
    await graduateRepository.save(await graduateFactory.make(user))
  }
}
