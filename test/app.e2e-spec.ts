import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { GetHelloMessageOutput } from '../src/use-cases/get-hello-message/io/get-hello-message.output';
import { GetHelloMessageInput } from '../src/use-cases/get-hello-message/io/get-hello-message.input';
import { ClassTransformer } from 'class-transformer';

describe('StarterApi (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => await app.close());

  it('GET /hello', (x) => {
    return request(app.getHttpServer())
      .get('/hello')
      .expect(200)
      .expect({ message: 'Hello World!' })
      .end(x);
  });

  it('GET /hello?name=Mock', (x) => {
    return request(app.getHttpServer())
      .get('/hello')
      .query(new GetHelloMessageInput('Mock'))
      .expect(200)
      .expect({ message: 'Hello Mock!' })
      .end(x);
  });
});
