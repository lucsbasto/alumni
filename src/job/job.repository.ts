import { Injectable } from '@nestjs/common'
import { Repository, DataSource } from 'typeorm'
import { Job } from './entities/job.entity'

@Injectable()
export class JobRepository extends Repository<Job> {
  constructor (private dataSource: DataSource) {
    super(Job, dataSource.createEntityManager())
  }

  async findOneAndRelated (id: string): Promise<Job | null> {
    return this.createQueryBuilder('job')
    .leftJoinAndSelect('job.graduates', 'graduates')
    .leftJoinAndSelect('graduates.user', 'user')
    .leftJoinAndSelect('user.address', 'address')
    .leftJoinAndSelect('address.city', 'city')
    .leftJoinAndSelect('city.state', 'state')
    .leftJoinAndSelect('state.country', 'country')
    .leftJoinAndSelect('graduates.courses', 'course')
    .leftJoinAndSelect('job.skills', 'skills')
    .leftJoinAndSelect('job.company', 'company')
    .leftJoinAndSelect('company.address', 'companyAddress')
    .leftJoinAndSelect('companyAddress.city', 'companyCity')
    .leftJoinAndSelect('companyCity.state', 'companyState')
    .leftJoinAndSelect('companyState.country', 'companyCountry')
    .where('job.id = :id', { id })
    .getOne()
  }

  async findManyAndRelated (): Promise<Job[]> {
    return this.createQueryBuilder('job')
    .leftJoinAndSelect('job.graduates', 'graduates')
    .leftJoinAndSelect('graduates.user', 'user')
    .leftJoinAndSelect('user.address', 'address')
    .leftJoinAndSelect('address.city', 'city')
    .leftJoinAndSelect('city.state', 'state')
    .leftJoinAndSelect('state.country', 'country')
    .leftJoinAndSelect('graduates.courses', 'course')
    .leftJoinAndSelect('job.skills', 'skills')
    .leftJoinAndSelect('job.company', 'company')
    .leftJoinAndSelect('company.address', 'companyAddress')
    .leftJoinAndSelect('companyAddress.city', 'companyCity')
    .leftJoinAndSelect('companyCity.state', 'companyState')
    .leftJoinAndSelect('companyState.country', 'companyCountry')
    .getMany()
  }
}
