import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { College } from './entities/college.entity'

@Injectable()
export class CollegeRepository extends Repository<College> {}
