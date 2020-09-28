import { Test, TestingModule } from '@nestjs/testing';
import { GetHelloMessageRouter } from './get-hello-message.router';
import { GetHelloMessageUseCase } from '../../use-cases/get-hello-message/get-hello-message.use-case';
import { GetHelloMessageInput } from '../../use-cases/get-hello-message/io/get-hello-message.input';
import { GetHelloMessageOutput } from '../../use-cases/get-hello-message/io/get-hello-message.output';

describe('AppRouter', () => {
  let appRouter: GetHelloMessageRouter;
  let getHelloMessage: GetHelloMessageUseCase;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GetHelloMessageRouter],
      providers: [GetHelloMessageUseCase],
    }).compile();

    appRouter = app.get(GetHelloMessageRouter);
    getHelloMessage = app.get(GetHelloMessageUseCase)
  });

  describe('GET /hello', () => {
    it('should return "Hello World!"', async () => {
      jest.spyOn(getHelloMessage, 'activate')
        .mockImplementation(() => Promise.resolve(new GetHelloMessageOutput()));

      const actual = await appRouter.activate(new GetHelloMessageInput());
      expect(actual).toBe('Hello World!');
    });
  });
});
