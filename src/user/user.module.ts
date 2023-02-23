import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Address } from '~/address/entities/address.entity'
import { User } from './entities/user.entity'
import { UserResolver } from './user.resolver'
import { UserService } from './user.service'

@Module({
  imports: [TypeOrmModule.forFeature([User, Address])],
  providers: [UserService, UserResolver]
})
export class UserModule {}
