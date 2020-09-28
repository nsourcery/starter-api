import { ApiProperty } from "@nestjs/swagger";

export class GetHelloMessageOutput {
    @ApiProperty()
    message: string;

    constructor(message?: string) {
        this.message = message;
    }
}