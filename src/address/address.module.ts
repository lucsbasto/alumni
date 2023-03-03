import { Module } from '@nestjs/common'
import { AddressService } from './address.service'
import { AddressResolver } from './address.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AddressRepository } from './address.repository'
import { CityRepository } from '~/city/city.repository'

@Module({
  imports: [TypeOrmModule.forFeature([AddressRepository, CityRepository])],
  providers: [AddressService, AddressResolver, AddressRepository]
})
export class AddressModule {}
