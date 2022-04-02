const stringify = require('querystring');

class UserService {
    constructor(api, host) {
        this.api = api
        this.url = host+'oauth/token'
    }

    prepareParams(username, password) {
        const params = new URLSearchParams();
        params.append('username', username);
        params.append('password', password);
        params.append('grant_type', 'password');

        return params
    }

    prepareConfig() {
        const auth = {
            username: 'hmv-clients-tango1010',
            password: 'hmv-client-secret-tango2020',
        }
        const encodedSecret = Buffer.from(`${auth.username}:${auth.password}`).toString('base64')

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic ' + encodedSecret
            },
        }

        return config
    }

    async login(username, password) {
        const params = this.prepareParams(username, password)
        const config = this.prepareConfig()

        try {
            const { data } = await this.api.post(this.url, params, config)

            return data
        }
        catch(err) {
            console.log('ERRO:', err)
        }
    }
}

module.exports = UserService