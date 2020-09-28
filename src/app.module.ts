import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MultiDatabaseModule } from '@nsourcery/databases';
import { EnvironmentModule } from '@nsourcery/env';
import { AutoSwaggerModule } from '@nsourcery/swagger';
import { GetHelloMessageRouter } from './routers/get-hello-message/get-hello-message.router';
import { GetHelloMessageUseCase } from './use-cases/get-hello-message/get-hello-message.use-case';

@Module({
  imports: [
    EnvironmentModule,
    AutoSwaggerModule,
    MultiDatabaseModule.fromEnvironmentKeys(['MAIN'])
  ],
  controllers: [GetHelloMessageRouter],
  providers: [GetHelloMessageUseCase],
})
export class AppModule { }
