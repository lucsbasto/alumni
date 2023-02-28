import { DataSource } from 'typeorm'
import { runSeeder, Seeder, SeederFactoryManager } from 'typeorm-extension'
import { CollegeSeeder } from './college.seed'
import { CompanySeeder } from './company.seed'
import { InitialSeeder } from './initial-seed.seeder'
import { JobSeeder } from './job.seed'
import { MajorSeeder } from './major.seed'
import { SkillSeeder } from './skill.seed'

export class MainSeeder implements Seeder {
  async run (dataSource: DataSource, _factoryManager: SeederFactoryManager): Promise<any> {
    await runSeeder(dataSource, InitialSeeder)
    await runSeeder(dataSource, CollegeSeeder)
    await runSeeder(dataSource, SkillSeeder)
    await runSeeder(dataSource, MajorSeeder)
    await runSeeder(dataSource, CompanySeeder)
    await runSeeder(dataSource, JobSeeder)
  }
}
