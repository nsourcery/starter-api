import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsOptional } from "class-validator";

@ApiExtraModels()
export class GetHelloMessageInput {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsAlpha()
    name?: string;
}