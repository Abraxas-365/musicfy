import { BaseError } from "./badeError";

export class TooManyAlbums extends BaseError {
    constructor(
        name: string,
        statusCode = 204,
        description = 'to many elements in db',
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}

