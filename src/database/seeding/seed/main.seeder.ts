import { DataSource } from 'typeorm'
import { runSeeder, Seeder, SeederFactoryManager } from 'typeorm-extension'
import { CollegeCeulpSeeder } from './ceulp.seed'
import { CollegeCatolicaSeeder } from './catolica.seed'
import { CompanySeeder } from './company.seed'
import { InitialSeeder } from './initial-seed.seeder'
import { JobSeeder } from './job.seed'
import { CourseSeeder } from './course.seed'
import { SkillSeeder } from './skill.seed'
import { GraduateCeulpSeeder } from './graduate-ceulp.seed'
import { GraduateCatolicaSeeder } from './graduate-catolica.seed'

export class MainSeeder implements Seeder {
  async run (dataSource: DataSource, _factoryManager: SeederFactoryManager): Promise<any> {
    await runSeeder(dataSource, InitialSeeder)
    await runSeeder(dataSource, CollegeCeulpSeeder)
    await runSeeder(dataSource, CollegeCatolicaSeeder)
    await runSeeder(dataSource, CourseSeeder)
    await runSeeder(dataSource, SkillSeeder)
    await runSeeder(dataSource, CompanySeeder)
    await runSeeder(dataSource, GraduateCatolicaSeeder)
    await runSeeder(dataSource, GraduateCeulpSeeder)
    await runSeeder(dataSource, JobSeeder)
    await runSeeder(dataSource, GraduateCeulpSeeder)
  }
}
