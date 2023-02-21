/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap () {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Alumni API')
    .setDescription('The alumni API description')
    .setVersion('1.0')
    .addTag('Alumni')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const port = process.env.PORT!;
  await app.listen(port);
}
bootstrap();
