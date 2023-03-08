import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AddressRepository } from '~/address/address.repository'
import { UserRepository } from '~/user/user.repository'
import { CollegeRepository } from './college.repository'
import { CollegeResolver } from './college.resolver'
import { CollegeService } from './college.service'

@Module({
  imports: [TypeOrmModule.forFeature([CollegeRepository, UserRepository, AddressRepository])],
  providers: [CollegeResolver, CollegeService, CollegeRepository]
})
export class CollegeModule {}
