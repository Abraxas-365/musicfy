import { BaseError } from "./badeError";

export class Error204 extends BaseError {
    constructor(
        name: string,
        description: string,
        statusCode = 204,
        isOperational = true
    ) {
        super(name, description, statusCode, isOperational)
    }
}

