import { DataSource } from 'typeorm'
import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { Company, Job, Skill } from './entities'

export class JobSeeder implements Seeder {
  public async run (
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const jobRepository = dataSource.getRepository(Job)
    const skillRepository = dataSource.getRepository(Skill)
    const companyRepository = dataSource.getRepository(Company)
    const jobFactory = factoryManager.get(Job)
    const company = (await companyRepository.find({})).at(0)
    const psicologiaSkill = await skillRepository.findOneBy({ id: '752a2f61-5f39-454c-b70a-cf4afeb815de' }) ?? new Skill()
    const odontoSkill = await skillRepository.findOneBy({ id: '4d849751-2db6-4698-b2d3-fdfc9e043594' }) ?? new Skill()
    const engenhariaSkill = await skillRepository.findOneBy({ id: '24a4791d-d691-4d2e-a679-c4f3a2830086' }) ?? new Skill()

    const job = await jobFactory.make({
      company,
      skills: [psicologiaSkill, odontoSkill, engenhariaSkill],
      isOpen: true
    })

    await jobRepository.save(job)
  }
}
