const UserService = require('../../../services/user')
const axios = require('axios')
const config = require('../../../../config')

const login = async (user, password) => {
    const { host } = config
    const service = new UserService(axios, host)
    const login = await service.login(user, password)
    return login
}

    
module.exports = {
    async login(_, args) {
        const { username, password } = args;
        const result = await login(username, password);
        return result
    }
}