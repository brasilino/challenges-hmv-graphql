const stringify = require('querystring');

class UserService {
    constructor(api, host) {
        this.api = api
        this.url = 'http://Servi-ALB01-1VD5W3BIU2PCZ-422654258.us-east-1.elb.amazonaws.com:8080/oauth/token'
    }

    async login(username, password) {
        const auth = {
            username: 'hmv-clients-tango1010',
            password: 'hmv-client-secret-tango2020',
        }

        const encodedSecret = Buffer.from(`${auth.username}:${auth.password}`).toString('base64')

        try {
            const { data } = await this.api.post(this.url, 
                {
                    username: 'tangomaster1010@hmv-master.com.br',
                    password: 'tenhoMundialF1fa',
                    grant_type: 'password'
                },
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        Authorization: 'Basic ' + encodedSecret
                    }
                })

            console.log('data:', data)

            return data
        }
        catch(err) {
            console.log('ERRO:', err)
        }
    }
}

module.exports = UserService