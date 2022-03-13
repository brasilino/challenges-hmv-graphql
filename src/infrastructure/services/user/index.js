const axios = require('axios')

class UserService {
    constructor(user, password) {
        this.user = user
        this.password = password
    }

    async login() {
        try {

            const { data } = await axios.get('https://6226776b2dfa524018060b42.mockapi.io/api/v1/users')

            return {
                Name: data.username,
                Token: data.token
            }
        }
        catch(err) {
            console.log('ERRO:', err)
        }
    }
}

module.exports = UserService