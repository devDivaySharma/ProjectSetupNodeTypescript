class ErrorModel {
    message: string;
    statusCode: number;
    success: boolean;
    constructor(message: string,statusCode: number,success: boolean){
        this.message = message,
        this.statusCode = statusCode,
        this.success = success;
    }
}

export default ErrorModel;