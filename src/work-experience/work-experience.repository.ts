import { Injectable } from '@nestjs/common'
import { DataSource, Repository } from 'typeorm'
import { WorkExperience } from './entities/work-experience.entity'

@Injectable()
export class WorkExperienceRepository extends Repository<WorkExperience> {
  constructor (private dataSource: DataSource) {
      super(WorkExperience, dataSource.createEntityManager())
  }
}
