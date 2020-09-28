import { Test, TestingModule } from '@nestjs/testing';
import { GetHelloMessageRouter } from './get-hello-message.router';
import { GetHelloMessageUseCase } from '../../use-cases/get-hello-message/get-hello-message.use-case';
import { GetHelloMessageInput } from '../../use-cases/get-hello-message/io/get-hello-message.input';
import { GetHelloMessageOutput } from '../../use-cases/get-hello-message/io/get-hello-message.output';

describe(GetHelloMessageRouter.name, () => {
  let instance: GetHelloMessageRouter;
  let useCase: GetHelloMessageUseCase;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GetHelloMessageRouter],
      providers: [GetHelloMessageUseCase],
    }).compile();

    instance = app.get(GetHelloMessageRouter);
    useCase = app.get(GetHelloMessageUseCase)
  });

  it('should return "Hello World!"', async () => {
    // SETUP
    const expected = new GetHelloMessageOutput()
    jest.spyOn(useCase, 'activate')
      .mockImplementation(() => Promise.resolve(expected));

    //given: a new input
    const input = new GetHelloMessageInput();

    //when: route is activated
    const actual = await instance.activate(input);

    //then: expected is the output
    expect(actual).toBe(expected);
  });

  it('should return "Hello Mock!"', async () => {
    // SETUP
    const expected = new GetHelloMessageOutput('Hello Mock!')
    jest.spyOn(useCase, 'activate')
      .mockImplementation(() => Promise.resolve(expected));

    //given: a new input
    const input = new GetHelloMessageInput('Mock');

    //when: route is activated
    const actual = await instance.activate(input);

    //then: expected is the output
    expect(actual).toBe(expected);
  });
});
