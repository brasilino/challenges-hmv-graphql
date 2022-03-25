const login = require('./queries/login')
const healthPlanMutations = require('./mutations/health-plan')
const findAllHealthPlans = require('./queries/health-plan')

    
module.exports = {
    Query: {
        ...login,
        ...findAllHealthPlans
    },
    Mutation: {
        ...healthPlanMutations
    }
}