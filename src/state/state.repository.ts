import { Injectable } from '@nestjs/common'
import { Repository, DataSource } from 'typeorm'
import { State } from './entities/state.entity'

@Injectable()
export class StateRepository extends Repository<State> {
  constructor (private dataSource: DataSource) {
    super(State, dataSource.createEntityManager())
  }

  async findAllAndRelated (): Promise<State[]> {
    return this.createQueryBuilder('state')
    .leftJoinAndSelect('state.country', 'country')
    .getMany()
  }
}
