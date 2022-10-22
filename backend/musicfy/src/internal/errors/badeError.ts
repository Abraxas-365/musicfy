
export class BaseError extends Error {
    statusCode: number
    isOperational: boolean

    constructor(name: string, description: string, statusCode: number, isOperational: boolean) {
        super(description)

        Object.setPrototypeOf(this, new.target.prototype)
        this.name = name
        this.statusCode = statusCode
        this.isOperational = isOperational
        Error.captureStackTrace(this)
    }
}

