import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3001', 'http://localhost:3000', 'http://192.168.1.208:3000', 'http://192.168.1.208:3001'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  app.use('/static', express.static(path.join(__dirname, '..', 'static')));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
