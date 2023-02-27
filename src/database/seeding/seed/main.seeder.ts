import { DataSource } from 'typeorm'
import { runSeeder, Seeder, SeederFactoryManager } from 'typeorm-extension'
import { CollegeSeeder } from './college.seed'
import { InitialSeeder } from './initial-seed.seeder'

export class MainSeeder implements Seeder {
  async run (dataSource: DataSource, _factoryManager: SeederFactoryManager): Promise<any> {
    await runSeeder(dataSource, InitialSeeder)
    await runSeeder(dataSource, CollegeSeeder)
  }
}
