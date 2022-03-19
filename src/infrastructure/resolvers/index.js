const login = require('./queries/login')
const register = require('./mutations/health-plan')
const findAllHealthPlans = require('./queries/health-plan')

    
module.exports = {
    Query: {
        ...login,
        ...findAllHealthPlans
    },
    Mutation: {
        ...register
    }
}