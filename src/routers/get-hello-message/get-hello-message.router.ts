import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetHelloMessageInput } from 'src/use-cases/get-hello-message/io/get-hello-message.input';
import { GetHelloMessageOutput } from 'src/use-cases/get-hello-message/io/get-hello-message.output';
import { GetHelloMessageUseCase } from '../../use-cases/get-hello-message/get-hello-message.use-case';

@ApiTags('Hello')
@Controller('hello')
export class GetHelloMessageRouter {
  constructor(private readonly getHelloMessageUseCase: GetHelloMessageUseCase) { }

  @Get()
  async activate(@Query() input: GetHelloMessageInput): Promise<GetHelloMessageOutput> {
    return await this.getHelloMessageUseCase.activate(input);
  }
}
