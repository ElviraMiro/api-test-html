const axios = require('axios')
const config = require('./config')

module.exports = function(email=config.TRADEUSER.email, password=config.TRADEUSER.password, application_id=config.TRADEUSER.application_id) {
    const apiClient = axios.create({
        baseURL: config.BARONG_USER_JWT_URL
    });
    return apiClient.post("", {email, password, application_id});
        //{ headers: { Authorization: `Bearer ${jwt}` } });
}