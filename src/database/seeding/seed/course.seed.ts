import { DataSource } from 'typeorm'
import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { Course, Skill } from './entities'

export class CourseSeeder implements Seeder {
  public async run (
    dataSource: DataSource,
    _factoryManager: SeederFactoryManager
  ): Promise<any> {
    const courseRepository = dataSource.getRepository(Course)
    const skillRepository = dataSource.getRepository(Skill)
    const psicologiaSkill = await skillRepository.findOneBy({ id: '752a2f61-5f39-454c-b70a-cf4afeb815de' }) ?? new Skill()
    const odontoSkill = await skillRepository.findOneBy({ id: '4d849751-2db6-4698-b2d3-fdfc9e043594' }) ?? new Skill()
    const engenhariaSkill = await skillRepository.findOneBy({ id: '24a4791d-d691-4d2e-a679-c4f3a2830086' }) ?? new Skill()
    await courseRepository.save([{
      degree: 'Bacharel',
      name: 'Psicologia',
      description: 'Curso de psicologia',
      skills: [psicologiaSkill]
    },
    {
      degree: 'Bacharel',
      name: 'Engenharia Civil',
      description: 'Curso de Engenharia',
      skills: [engenhariaSkill]
    },
    {
      degree: 'Bacharel',
      name: 'Odontologia',
      description: 'Curso de Odontologia',
      skills: [odontoSkill]
    }])
  }
}
