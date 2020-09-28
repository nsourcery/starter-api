import { ApiProperty, } from "@nestjs/swagger";
import { IsAlpha, IsOptional } from "class-validator";

export class GetHelloMessageInput {
    @ApiProperty({
        description: 'The name to customize the message',
        required: false,
        example: 'Mikey'
    })
    @IsOptional()
    @IsAlpha()
    name?: string;

    constructor(name?: string) {
        this.name = name;
    }
}