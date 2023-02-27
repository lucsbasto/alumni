import { Module } from '@nestjs/common'
import { SkillService } from './skill.service'
import { SkillResolver } from './skill.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Skill } from './entities/skill.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Skill])],
  providers: [SkillService, SkillResolver]
})
export class SkillModule {}
