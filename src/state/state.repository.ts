import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { State } from './entities/state.entity'

@Injectable()
export class StateRepository extends Repository<State> {}
