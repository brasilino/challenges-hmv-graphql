const login = require('./queries/login')
const healthPlanMutations = require('./mutations/health-plan')
const findAllHealthPlans = require('./queries/health-plan')
const specialtiesMutations = require('./mutations/specialties')

    
module.exports = {
    Query: {
        ...login,
        ...findAllHealthPlans
    },
    Mutation: {
        ...healthPlanMutations,
        ...specialtiesMutations
    }
}