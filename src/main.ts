import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { DBTypeORMConnectionAdapter } from './shared/infra/database/typeorm/connection';

async function bootstrap() {
  const connection = new DBTypeORMConnectionAdapter();
  await connection.connect({
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER!,
    password: process.env.DB_PASS!,
    database: process.env.DB_NAME!,
  });
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Alumni API')
    .setDescription('The alumni API description')
    .setVersion('1.0')
    .addTag('Alumni')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const port = process.env.PORT!
  await app.listen(port);
}
bootstrap();
