import { Injectable } from '@nestjs/common'
import { DataSource, Repository } from 'typeorm'
import { FilterGraduateInput } from './dto/filter-graduate.input'
import { Graduate } from './entities/graduate.entity'

@Injectable()
export class GraduateRepository extends Repository<Graduate> {
  constructor (private dataSource: DataSource) {
      super(Graduate, dataSource.createEntityManager())
  }

  async findManyByFilter (filter: FilterGraduateInput): Promise<Graduate[]> {
    const query = this.createQueryBuilder('graduate')
    .leftJoinAndSelect('graduate.user', 'user')
    .leftJoinAndSelect('user.address', 'address')
    .leftJoinAndSelect('address.city', 'city')
    .leftJoinAndSelect('city.state', 'state')
    .leftJoinAndSelect('state.country', 'country')
    .leftJoinAndSelect('graduate.courses', 'course')
    .leftJoinAndSelect('graduate.jobs', 'jobs')
    .leftJoinAndSelect('course.skills', 'skills')
    if (filter.graduateId) {
      query.where('graduate.id = :graduateId', { graduateId: filter.graduateId })
    }
    if (filter.courseId) {
      query.where('course.id = :courseId', { courseId: filter.courseId })
    }
    if (filter.startGraduation) {
      query.where('graduate.startGraduation = :startGraduation', { startGraduation: filter.startGraduation })
    }
    if (filter.endGraduation) {
      query.where('graduate.endGraduation = :endGraduation', { endGraduation: filter.endGraduation })
    }
    if (filter.cityId) {
      query.where('city.id = :cityId', { cityId: filter.cityId })
    }
    if (filter.stateId) {
      query.where('state.id = :stateId', { stateId: filter.stateId })
    }
    if (filter.countryId) {
      query.where('country.id = :countryId', { countryId: filter.countryId })
    }
    if (filter.skillsId) {
      query.where('skills.id IN (:...skillsId)', { skillsId: filter.skillsId })
      if (filter.skillLevel) {
        query.andWhere('skills.level = :skillLevel', { skillLevel: filter.skillLevel })
      }
    }
    const teste = await query.getMany()
    return teste
  }

  async findOneAndRelated (id: string): Promise<Graduate | null> {
    return this.findOne({
      where: { id },
      relations: {
        user: { address: { city: { state: { country: {} } } } },
        courses: {
          college: { user: { address: { city: { state: { country: {} } } } } },
          skills: true
        }
      }
    })
  }
}
