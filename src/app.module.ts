import { Module } from '@nestjs/common';
import { GraduateModule } from './graduate/graduate.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraduateEntity } from './graduate/entities/graduate.entity';
import { CollegeModule } from './college/college.module';

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
      entities: [GraduateEntity],
      synchronize: true,
      logging: false
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    GraduateModule,
    CollegeModule
],
  controllers: [],
  providers: []
})
export class AppModule {}
