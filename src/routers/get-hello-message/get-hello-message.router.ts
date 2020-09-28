import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetHelloMessageInput } from '../../use-cases/get-hello-message/io/get-hello-message.input';
import { GetHelloMessageOutput } from '../../use-cases/get-hello-message/io/get-hello-message.output';
import { GetHelloMessageUseCase } from '../../use-cases/get-hello-message/get-hello-message.use-case';
import { RequestError, ServerError } from '@nsourcery/common';

@ApiTags('Hello')
@Controller('hello')
export class GetHelloMessageRouter {
  constructor(private readonly getHelloMessageUseCase: GetHelloMessageUseCase) { }

  @Get()
  @ApiOperation({ operationId: 'getHelloMessage', summary: 'Gets a hello message', description: 'Returns a default/custom hello message' })
  @ApiResponse({ status: 200, description: 'Request has succeeded', type: GetHelloMessageOutput })
  @ApiResponse({ status: 400, description: 'Request failed the input validation', type: RequestError })
  @ApiResponse({ status: 500, description: 'Request suffered from errors in the server', type: ServerError })
  async activate(@Query() input: GetHelloMessageInput): Promise<GetHelloMessageOutput> {
    return await this.getHelloMessageUseCase.activate(input);
  }
}
