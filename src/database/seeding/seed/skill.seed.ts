import { DataSource } from 'typeorm'
import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { Skill } from './entities'

export class SkillSeeder implements Seeder {
  public async run (
    dataSource: DataSource,
    _factoryManager: SeederFactoryManager
  ): Promise<any> {
    const skillRepository = dataSource.getRepository(Skill)

    await skillRepository.save([{
      id: '752a2f61-5f39-454c-b70a-cf4afeb815de',
      name: 'Descobrir o que a pessoa ta sentindo',
      description: 'Descobrir o que a pessoa ta sentindo perguntando como ela se sente',
      level: 'Intermediario'
    }, {
      id: '4d849751-2db6-4698-b2d3-fdfc9e043594',
      name: 'Colocar aparelho',
      description: 'Fechar um plano pra botar aparelho na feia',
      level: 'Intermediario'
    }, {
      id: '24a4791d-d691-4d2e-a679-c4f3a2830086',
      name: 'Fazer uma massa de cimento boa',
      description: 'Conseguir fazer uma massa de cimento decente',
      level: 'Intermediario'
    }])
  }
}
