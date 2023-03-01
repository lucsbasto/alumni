import { registerEnumType } from '@nestjs/graphql'

export enum ExperienceLevelEnum {
  ENTRY = 'ENTRY',
  JUNIOR = 'JUNIOR',
  MID = 'MID',
  SENIOR = 'SENIOR',
}

registerEnumType(ExperienceLevelEnum, {
  name: 'ExperienceLevelEnum'
})
