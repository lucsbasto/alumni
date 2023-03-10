import { Injectable } from '@nestjs/common'
import { Repository, DataSource } from 'typeorm'
import { College } from './entities/college.entity'

@Injectable()
export class CollegeRepository extends Repository<College> {
  constructor (private dataSource: DataSource) {
    super(College, dataSource.createEntityManager())
  }

  async findByName (name: string): Promise<College | null> {
    return this.createQueryBuilder('college')
    .leftJoinAndSelect('college.user', 'user')
    .leftJoinAndSelect('user.address', 'address')
    .leftJoinAndSelect('address.city', 'city')
    .leftJoinAndSelect('city.state', 'state')
    .leftJoinAndSelect('state.country', 'country')

    .leftJoinAndSelect('college.address', 'collegeAddress')
    .leftJoinAndSelect('collegeAddress.city', 'collegeCity')
    .leftJoinAndSelect('collegeCity.state', 'collegeState')
    .leftJoinAndSelect('collegeState.country', 'collegeCountry')

    .leftJoinAndSelect('college.courses', 'courses')
    .leftJoinAndSelect('courses.skills', 'skills')
    .where('college.name ILIKE :name', { name: `%${name}%` })
    .getOne()
  }

  async findOneAndRelated (id: string): Promise<College | null> {
    return this.findOne({
      where: { id },
      relations: {
        address: { city: { state: { country: true } } },
        user: { address: { city: { state: { country: true } } } },
        courses: {
          skills: true,
          graduates: {
            user: { address: { city: { state: { country: true } } } }
          }
         }
      }
    })
  }

  async findAllAndRelated (): Promise<College[]> {
    return this.find({
      relations: {
        address: { city: { state: { country: true } } },
        user: { address: { city: { state: { country: true } } } },
        courses: {
          skills: true,
          graduates: {
            user: { address: { city: { state: { country: true } } } }
          }
         }
      }
    })
  }
}
