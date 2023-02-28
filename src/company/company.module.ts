import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Job } from '~/job/entities/job.entity'
import { CompanyResolver } from './company.resolver'
import { CompanyService } from './company.service'
import { Company } from './entities/company.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Company, Job])],
  providers: [CompanyResolver, CompanyService]
})
export class CompanyModule {}
