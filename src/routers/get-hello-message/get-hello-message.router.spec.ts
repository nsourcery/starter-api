import { Test, TestingModule } from '@nestjs/testing';
import { GetHelloMessageRouter } from './get-hello-message.router';
import { GetHelloMessageUseCase } from '../../use-cases/get-hello-message/get-hello-message.use-case';
import { GetHelloMessageInput } from 'src/use-cases/get-hello-message/io/get-hello-message.input';

describe('AppRouter', () => {
  let appRouter: GetHelloMessageRouter;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GetHelloMessageRouter],
      providers: [GetHelloMessageUseCase],
    }).compile();

    appRouter = app.get<GetHelloMessageRouter>(GetHelloMessageRouter);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appRouter.activate(new GetHelloMessageInput())).toBe('Hello World!');
    });
  });
});
