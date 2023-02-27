import 'reflect-metadata'
import { DataSource, DataSourceOptions } from 'typeorm'
import { runSeeders, SeederOptions } from 'typeorm-extension'

import { MainSeeder } from './main.seeder'
import { Address, City, Country, State, College, Company, Graduate, Job, Major, Skill, User } from './entities'
import { addressFactory } from '../factory/address.factory'
import { collegeFactory } from '../factory/college.factory'
import { usersFactory } from '../factory/user.factory'
import { graduateFactory } from '../factory/graduate.factory'

const {
  DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME
} = process.env

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: DB_HOST || 'localhost',
  port: Number(DB_PORT) || 5432,
  username: DB_USER || 'postgres',
  password: DB_PASSWORD || 'postgres',
  database: DB_NAME || 'alumni_db',
  entities: [Address, City, Country, State, College, Company, Graduate, Job, Major, Skill, User],
  factories: [addressFactory, collegeFactory, usersFactory, graduateFactory],
  seeds: [MainSeeder]
}

const dataSource = new DataSource(options)

dataSource.initialize().then(async () => {
  await dataSource.synchronize(true)
  await runSeeders(dataSource)
  process.exit()
})
