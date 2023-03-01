import { Module } from '@nestjs/common'
import { JobService } from './job.service'
import { JobResolver } from './job.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Job } from './entities/job.entity'
import { Company } from '~/company/entities/company.entity'
import { Skill } from '~/skill/entities/skill.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Job, Company, Skill])],
  providers: [JobService, JobResolver]
})
export class JobModule {}