import { ApiProperty, } from "@nestjs/swagger";
import { IsAlpha, IsOptional } from "class-validator";

export class GetHelloMessageInput {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsAlpha()
    name?: string;

    constructor(name?: string) {
        this.name = name;
    }
}