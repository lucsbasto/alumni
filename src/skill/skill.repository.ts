import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Skill } from './entities/skill.entity'

@Injectable()
export class SkillRepository extends Repository<Skill> {}
