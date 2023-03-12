import { Module } from '@nestjs/common'
import { JobService } from './job.service'
import { JobResolver } from './job.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JobRepository } from './job.repository'
import { GraduateRepository } from '~/graduate/graduate.repository'
import { SkillRepository } from '~/skill/skill.repository'

@Module({
  imports: [TypeOrmModule.forFeature([JobRepository, SkillRepository, GraduateRepository])],
  providers: [JobService, JobResolver, JobRepository, GraduateRepository]
})
export class JobModule {}
