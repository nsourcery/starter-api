import { Test, TestingModule } from '@nestjs/testing';
import { GetHelloMessageUseCase } from '../../use-cases/get-hello-message/get-hello-message.use-case';
import { GetHelloMessageInput } from '../../use-cases/get-hello-message/io/get-hello-message.input';
import { GetHelloMessageOutput } from '../../use-cases/get-hello-message/io/get-hello-message.output';

describe(GetHelloMessageUseCase.name, () => {
    let instance: GetHelloMessageUseCase;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            providers: [GetHelloMessageUseCase],
        }).compile();

        instance = app.get(GetHelloMessageUseCase)
    });

    it('should return "Hello World!"', async () => {
        // SETUP
        const expected = new GetHelloMessageOutput()
        jest.spyOn(instance, 'activate')
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
        jest.spyOn(instance, 'activate')
            .mockImplementation(() => Promise.resolve(expected));

        //given: a new input
        const input = new GetHelloMessageInput('Mock');

        //when: route is activated
        const actual = await instance.activate(input);

        //then: expected is the output
        expect(actual).toBe(expected);
    });
});
