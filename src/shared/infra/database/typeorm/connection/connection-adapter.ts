import { Connection, createConnection } from 'typeorm'

import { DatabaseConnection } from '../contracts'

export class DBTypeORMConnectionAdapter implements DatabaseConnection {
  private connection: Connection

  async connect (params?: DatabaseConnection.Input): Promise<void> {
    this.connection = await createConnection({
      type: 'postgres',
      host: params!.host,
      port: params!.port,
      username: params!.username,
      password: params!.password,
      database: params!.database,
      entities: [`${__dirname}/../mapping/*.{js,ts}`],
      synchronize: false,
      logging: false
    })
  }

  async close (): Promise<void> {
    await this.connection.close()
  }
}
