class messageResponse {
    public message: string;
    public success: boolean;

    constructor(message: string, success: boolean) {
        this.message = message;
        this.success = success;
    }
}

export default messageResponse;