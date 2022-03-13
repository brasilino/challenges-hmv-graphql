// const db = require('../../../db')
const UserService = require('../../../services/user')

const login = async (user, password) => {
    const userService = new UserService(user, password)

    const login = await userService.login()

    return login
}

    
module.exports = {
    async login(_, args) {
        const { user, password } = args;
        const result = await login(user, password);
        return result
    }
}