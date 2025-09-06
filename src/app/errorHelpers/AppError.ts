class AppError extends Error {
    public statusCode: number; // publick er bishoita bujinai ? publick use korate kii shubidha holo??Q:8

    constructor(statusCode: number, message: string, stack = '') {
        super(message) 
        this.statusCode = statusCode
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor) // aii line ta dara kii bujaise ? Q:9
        }
    }
}

export default AppError