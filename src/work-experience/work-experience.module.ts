import { Module } from '@nestjs/common'
import { WorkExperienceService } from './work-experience.service'
import { WorkExperienceResolver } from './work-experience.resolver'
import { WorkExperienceRepository } from './work-experience.repository'
import { GraduateRepository } from '~/graduate/graduate.repository'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([WorkExperienceRepository, GraduateRepository])],
  providers: [WorkExperienceService, WorkExperienceResolver, WorkExperienceRepository, GraduateRepository]
})
export class WorkExperienceModule {}
