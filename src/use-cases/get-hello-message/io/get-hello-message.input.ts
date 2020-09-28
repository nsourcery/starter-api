import { ApiProperty, } from "@nestjs/swagger";
import { IsAlpha, IsOptional } from "class-validator";

export class GetHelloMessageInput {
    @ApiProperty({
        description: 'The name to customize the message',
        required: false,
        example: 'Mikey'
    })
    @IsOptional()
    @IsAlpha('pt-BR', { message: 'Nome precisa ser composto apenas de letras ex.: a-zA-Z' })
    name?: string;

    constructor(name?: string) {
        this.name = name;
    }
}