import { Injectable } from '@nestjs/common'
import { Repository, DataSource } from 'typeorm'
import { Skill } from './entities/skill.entity'

@Injectable()
export class SkillRepository extends Repository<Skill> {
  constructor (private dataSource: DataSource) {
    super(Skill, dataSource.createEntityManager())
  }

  async findOneAndRelated (id: string): Promise<Skill | null> {
    return this.createQueryBuilder('skill')
    .leftJoinAndSelect('skill.course', 'course')
    .leftJoinAndSelect('course.college', 'college')
    .leftJoinAndSelect('college.address', 'address')
    .leftJoinAndSelect('college.address', 'address')
    .leftJoinAndSelect('address.city', 'city')
    .leftJoinAndSelect('city.state', 'state')
    .leftJoinAndSelect('state.country', 'country')
    .leftJoinAndSelect('graduates.courses', 'course')
    .leftJoinAndSelect('skills.job', 'job')
    .leftJoinAndSelect('job.company', 'company')
    .leftJoinAndSelect('company.address', 'companyAddress')
    .leftJoinAndSelect('companyAddress.city', 'companyCity')
    .leftJoinAndSelect('companyCity.state', 'companyState')
    .leftJoinAndSelect('companyState.country', 'companyCountry')
    .where('skill.id = :id', { id })
    .getOne()
  }

  async findOneAndRelatedByName (id: string): Promise<Skill | null> {
    return this.createQueryBuilder('skill')
    .leftJoinAndSelect('skill.course', 'course')
    .leftJoinAndSelect('course.college', 'college')
    .leftJoinAndSelect('college.address', 'address')
    .leftJoinAndSelect('college.address', 'address')
    .leftJoinAndSelect('address.city', 'city')
    .leftJoinAndSelect('city.state', 'state')
    .leftJoinAndSelect('state.country', 'country')
    .leftJoinAndSelect('graduates.courses', 'course')
    .leftJoinAndSelect('skills.job', 'job')
    .leftJoinAndSelect('job.company', 'company')
    .leftJoinAndSelect('company.address', 'companyAddress')
    .leftJoinAndSelect('companyAddress.city', 'companyCity')
    .leftJoinAndSelect('companyCity.state', 'companyState')
    .leftJoinAndSelect('companyState.country', 'companyCountry')
    .where('skill.id = :id', { id })
    .getOne()
  }
}
