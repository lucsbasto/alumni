import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Major } from './entities/major.entity'

@Injectable()
export class MajorRepository extends Repository<Major> {}
