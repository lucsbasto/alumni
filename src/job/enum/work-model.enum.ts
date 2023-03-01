import { registerEnumType } from '@nestjs/graphql'

export enum WorkModel {
  REMOTE = 'REMOTO',
  HIBRID = 'HIBRIDO',
  ON_SITE = 'PRESENCIAL',
}

registerEnumType(WorkModel, {
  name: 'WorkModel'
})
