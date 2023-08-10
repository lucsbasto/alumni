import { DataSource, DataSourceOptions, UpdateResult } from 'typeorm'

export const updateResult: UpdateResult = {
  affected: 1,
  raw: {},
  generatedMaps: []
}

export const options: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'alumni_db',
  entities: []
}

export default class MockDataSource extends DataSource {
}
