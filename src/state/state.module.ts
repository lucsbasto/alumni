import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CountryRepository } from '~/country/country.repository'
import { StateRepository } from './state.repository'
import { StateResolver } from './state.resolver'
import { StateService } from './state.service'

@Module({
  imports: [TypeOrmModule.forFeature([StateRepository, CountryRepository])],
  providers: [StateService, StateResolver, StateRepository, CountryRepository]
})
export class StateModule {}
