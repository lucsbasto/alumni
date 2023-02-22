import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Graduate } from './entities/graduate.entity'

@Injectable()
export class GraduateRepository extends Repository<Graduate> {}
