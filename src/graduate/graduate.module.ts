import { Module } from '@nestjs/common'
import { GraduateService } from './graduate.service'
import { GraduateResolver } from './graduate.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Graduate } from './entities/graduate.entity'
import { User } from '~/user/entities/user.entity'
import { Major } from '~/major/entities/major.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Graduate, User, Major])],
  providers: [GraduateService, GraduateResolver]
})
export class GraduateModule {}
