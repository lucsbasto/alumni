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
import { MajorModule } from './major/major.module'

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
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: true,
      logging: true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    AddressModule,
    CityModule,
    CollegeModule,
    CountryModule,
    GraduateModule,
    MajorModule,
    StateModule,
    UserModule
],
  controllers: [],
  providers: []
})
export class AppModule {}
