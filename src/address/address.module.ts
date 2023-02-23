import { Module } from '@nestjs/common'
import { AddressService } from './address.service'
import { AddressResolver } from './address.resolver'
import { Address } from './entities/address.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { City } from '~/city/entities/city.entity'
import { AddressRepository } from './address.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Address, City])],
  providers: [AddressService, AddressResolver, AddressRepository]
})
export class AddressModule {}
