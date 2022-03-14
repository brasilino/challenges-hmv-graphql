const login = require('./queries/login')
const register = require('./mutations/health-plan')

    
module.exports = {
    Query: {
        ...login
    },
    Mutation: {
        ...register
    }
}