class Helper {
    numberCheck(number){
        const pattern=/^09[0-9]{9}$/;
        return pattern.test(number);
    }
    EmailCheck(email){
        const pattern=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(email);
    }
}
export default new Helper();