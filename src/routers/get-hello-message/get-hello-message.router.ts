import { Controller, Get, Query } from '@nestjs/common';
import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetHelloMessageInput } from '../../use-cases/get-hello-message/io/get-hello-message.input';
import { GetHelloMessageOutput } from '../../use-cases/get-hello-message/io/get-hello-message.output';
import { GetHelloMessageUseCase } from '../../use-cases/get-hello-message/get-hello-message.use-case';

class ServerError {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  message: string;
}

class RequestError {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  message: Array<string>
  @ApiProperty()
  error: string
}


@ApiTags('Hello')
@Controller('hello')
export class GetHelloMessageRouter {
  constructor(private readonly getHelloMessageUseCase: GetHelloMessageUseCase) { }

  @Get()
  @ApiResponse({ status: 200, description: 'Request has succeeded', type: GetHelloMessageOutput })
  @ApiResponse({ status: 400, description: 'Request failed the input validation', type: RequestError })
  @ApiResponse({ status: 500, description: 'Request suffered from errors in the server', type: ServerError })
  async activate(@Query() input: GetHelloMessageInput): Promise<GetHelloMessageOutput> {
    return await this.getHelloMessageUseCase.activate(input);
  }
}
