import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CountryRepository } from './country.repository'
import { CountryResolver } from './country.resolver'
import { CountryService } from './country.service'

@Module({
  imports: [TypeOrmModule.forFeature([CountryRepository])],
  providers: [CountryService, CountryResolver, CountryRepository]
})
export class CountryModule {}
