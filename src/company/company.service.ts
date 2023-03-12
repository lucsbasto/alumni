import { Injectable, NotFoundException } from '@nestjs/common'
import { AddressRepository } from '~/address/address.repository'
import { CityRepository } from '~/city/city.repository'
import { UserRepository } from '~/user/user.repository'
import { CompanyRepository } from './company.repository'
import { CreateCompanyInput } from './dto/create-company.input'
import { UpdateCompanyInput } from './dto/update-company.input'
import { Company } from './entities/company.entity'

@Injectable()
export class CompanyService {
  constructor (
    private readonly repository: CompanyRepository,
    private readonly userRepository: UserRepository,
    private readonly addressRepository: AddressRepository,
    private readonly cityRepository: CityRepository
  ) {}

  async create (input: CreateCompanyInput): Promise<Company> {
    const city = (await this.cityRepository.findOne({ where: { id: input.address.cityId } }))
    if (!city) {
      throw new NotFoundException('City not found')
    }
    const userAddress = await this.addressRepository.save({ ...input.user.address, city })
    const companyAddress = await this.addressRepository.save({ ...input.address, city })
    const user = await this.userRepository.save({ ...input.user, address: userAddress })

    return this.repository.save({ ...input, user, companyAddress })
  }

  async findAll (): Promise<Company[]> {
    return this.repository.findAllWithRelations()
  }

  async findOne (id: string): Promise<Company | null> {
    return this.repository.findOneWithRelations(id)
  }

  async update (input: UpdateCompanyInput): Promise<Company | null> {
    const company = await this.repository.findOne({ where: { id: input.id } })
    if (!company) {
      throw new NotFoundException('Company not found')
    }
    if (input.user) {
      await this.userRepository.update({ id: input.user.id }, { ...input.user })
    }
    await this.repository.save(input)
    return this.repository.findOne({ where: { id: input.id } })
  }

  async delete (id: string): Promise<void> {
    await this.repository.update({ id }, { deletedDate: new Date() })
  }
}
