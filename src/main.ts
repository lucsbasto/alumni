/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)

  const port = process.env.PORT!
  await app.listen(port)
}
bootstrap()
