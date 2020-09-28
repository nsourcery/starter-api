import { Injectable } from '@nestjs/common';
import { HelloMessage } from './entities/hello.entity';
import { GetHelloMessageInput } from './io/get-hello-message.input';
import { GetHelloMessageOutput } from './io/get-hello-message.output';

@Injectable()
export class GetHelloMessageUseCase {
  async activate(input: GetHelloMessageInput): Promise<GetHelloMessageOutput> {
    const entity = new HelloMessage(`Hello ${input.name || 'World'}!`);
    return Promise.resolve(new GetHelloMessageOutput(entity.message));
  }
}
