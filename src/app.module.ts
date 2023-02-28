import { Module } from '@nestjs/common'
import { GraduateModule } from './graduate/graduate.module'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CollegeModule } from './college/college.module'
import { AddressModule } from './address/address.module'
import { CountryModule } from './country/country.module'
import { StateModule } from './state/state.module'
import { UserModule } from './user/user.module'
import { CityModule } from './city/city.module'
import { CompanyModule } from './company/company.module'
import { MajorModule } from './major/major.module'
import { JobModule } from './job/job.module'
import { Address } from './address/entities/address.entity'
import { City } from './city/entities/city.entity'
import { College } from './college/entities/college.entity'
import { Country } from './country/entities/country.entity'
import { Graduate } from './graduate/entities/graduate.entity'
import { Job } from './job/entities/job.entity'
import { Major } from './major/entities/major.entity'
import { Skill } from './skill/entities/skill.entity'
import { State } from './state/entities/state.entity'
import { User } from './user/entities/user.entity'
import { Company } from './company/entities/company.entity'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      host: process.env.DB_HOST!,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER!,
      password: process.env.DB_PASS!,
      database: process.env.DB_NAME!,
      type: 'postgres',
      entities: [Address, City, College, Company, Country, Graduate, Job, Major, Skill, State, User],
      synchronize: true,
      logging: true,
      autoLoadEntities: true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    AddressModule,
    CityModule,
    CollegeModule,
    CompanyModule,
    CountryModule,
    GraduateModule,
    MajorModule,
    StateModule,
    UserModule,
    JobModule
],
  controllers: [],
  providers: []
})
export class AppModule {}
