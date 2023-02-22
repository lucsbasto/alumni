import { Module } from '@nestjs/common'
import { AddressService } from './address.service'
import { AddressResolver } from './address.resolver'
import { Address } from './entities/address.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  providers: [AddressService, AddressResolver]
})
export class AddressModule {}
