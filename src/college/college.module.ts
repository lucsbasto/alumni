import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Address } from '~/address/entities/address.entity'
import { User } from '~/user/entities/user.entity'
import { CollegeResolver } from './college.resolver'
import { CollegeService } from './college.service'
import { College } from './entities/college.entity'

@Module({
  imports: [TypeOrmModule.forFeature([College, User, Address])],
  providers: [CollegeResolver, CollegeService]
})
export class CollegeModule {}
