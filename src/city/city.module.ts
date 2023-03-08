import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { StateRepository } from '~/state/state.repository'
import { CityRepository } from './city.repository'
import { CityResolver } from './city.resolver'
import { CityService } from './city.service'

@Module({
  imports: [TypeOrmModule.forFeature([CityRepository, StateRepository])],
  providers: [CityService, CityResolver, CityRepository, StateRepository],
  exports: [CityRepository]
})
export class CityModule {}
