class SuccessModel {
    data: any;
    statusCode: number;
    success: boolean;
    constructor(data: any,statusCode: number,success: boolean){
        this.data = this.data,
        this.statusCode = statusCode,
        this.success = success;
    }
}

export default SuccessModel;