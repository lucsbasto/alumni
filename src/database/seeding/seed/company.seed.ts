import { DataSource } from 'typeorm'
import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { generateRandomCnpj } from '../faker/cnpj.faker'
import { Address, City, Company, User } from './entities'

export class CompanySeeder implements Seeder {
  public async run (
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const cityRepository = dataSource.getRepository(City)
    const userRepository = dataSource.getRepository(User)
    const addressRepository = dataSource.getRepository(Address)
    const companyRepository = dataSource.getRepository(Company)
    const addressFactory = factoryManager.get(Address)
    const usersFactory = factoryManager.get(User)
    const companyFactory = factoryManager.get(Company)

    const city = (await cityRepository.find({})).at(0)

    const userAddress = await addressFactory.make({ city })
    const companyAddress = await addressFactory.make({ city })

    await addressRepository.save([userAddress, companyAddress])
    const user = await usersFactory.make({ address: userAddress })
    await userRepository.save(user)
    const company = await companyFactory.make({
      address: companyAddress,
      user,
      cnpj: generateRandomCnpj()
    })
    await companyRepository.save(company)
  }
}
