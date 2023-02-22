import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CountryResolver } from './country.resolver'
import { CountryService } from './country.service'
import { Country } from './entities/country.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Country])],
  providers: [CountryService, CountryResolver]
})
export class CountryModule {}
