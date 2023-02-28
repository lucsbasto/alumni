import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Job } from './entities/job.entity'

@Injectable()
export class JobRepository extends Repository<Job> {}
