export class GetHelloMessageOutput {

    errors?: Array<string>;
    message?: string;

    constructor(message?: string, errors?: Array<string>) {
        this.message = message;
        this.errors = errors;
    }
}