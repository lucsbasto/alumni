import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Country } from '~/country/entities/country.entity'
import { State } from './entities/state.entity'
import { StateResolver } from './state.resolver'
import { StateService } from './state.service'

@Module({
  imports: [TypeOrmModule.forFeature([State, Country])],
  providers: [StateService, StateResolver]
})
export class StateModule {}
