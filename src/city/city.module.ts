import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { State } from '~/state/entities/state.entity'
import { CityResolver } from './city.resolver'
import { CityService } from './city.service'
import { City } from './entities/city.entity'

@Module({
  imports: [TypeOrmModule.forFeature([City, State])],
  providers: [CityService, CityResolver]
})
export class CityModule {}
