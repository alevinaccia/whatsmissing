module.exports = class Missing{
    constructor(message, code){
        this.message = message;
        this.code = code;
        this.completed = false;
    }
}
