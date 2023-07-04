class dataResponse {
    public message: string;
    public success: boolean;
    public data: any;

    constructor(message: string, success: boolean, data: any) {
        this.message = message;
        this.success = success;
        this.data = data;
    }
}

export default dataResponse;