import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { EnvironmentService } from '@nsourcery/env';
import { AutoSwaggerService } from '@nsourcery/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.get(AutoSwaggerService).addSwagger(app);
  app.useGlobalPipes(new ValidationPipe({ transform: true, validateCustomDecorators: true }))
  await app.listen(app.get(EnvironmentService).get('PORT'));
}
bootstrap();
