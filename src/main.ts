import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:['http://localhost:4200'],
    optionsSuccessStatus: 202
  })
  app.useGlobalPipes(new ValidationPipe());
  app.use(morgan('dev'));
  await app.listen(3000);
}
bootstrap();
