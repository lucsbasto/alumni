import { DataSource } from 'typeorm'
import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { College, Address, City, User, Course } from './entities'

export class CollegeCatolicaSeeder implements Seeder {
  public async run (
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const cityRepository = dataSource.getRepository(City)
    const addressRepository = dataSource.getRepository(Address)
    const collegeRepository = dataSource.getRepository(College)
    const userRepository = dataSource.getRepository(User)
    const courseRepository = dataSource.getRepository(Course)

    const addressFactory = factoryManager.get(Address)
    const usersFactory = factoryManager.get(User)
    const collegeFactory = factoryManager.get(College)

    const city = (await cityRepository.find({})).at(0)
    const courses = await courseRepository.find({})
    const userAddress = await addressRepository.save(await addressFactory.make({ city }))
    const collegeAddress = await addressRepository.save(await addressFactory.make({ city }))
    const user = await userRepository.save(await usersFactory.make({ address: userAddress }))
    await collegeRepository.save(await collegeFactory.make({ user, address: collegeAddress, courses, name: 'Catolica' }))
  }
}
