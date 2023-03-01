import { registerEnumType } from '@nestjs/graphql'

export enum SkillLevel {
  NOVICE = 'NOVICE',
  BEGINNER = 'BEGINNER',
  MIDDLE = 'MIDDLE',
  PROFICIENT = 'PROFICIENT',
  EXPERT = 'EXPERT',
}

registerEnumType(SkillLevel, {
  name: 'SkillLevel'
})
