import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AddressRepository } from '~/address/address.repository'
import { CityRepository } from '~/city/city.repository'
import { UserRepository } from '~/user/user.repository'
import { CompanyRepository } from './company.repository'
import { CompanyResolver } from './company.resolver'
import { CompanyService } from './company.service'

@Module({
  imports: [TypeOrmModule.forFeature([CompanyRepository, UserRepository, AddressRepository, CityRepository])],
  providers: [CompanyResolver, CompanyService, CompanyRepository, AddressRepository, UserRepository, CityRepository]
})
export class CompanyModule {}
