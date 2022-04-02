const userMutations = require('./mutations/user')
const healthPlanMutations = require('./mutations/health-plan')
const findAllHealthPlans = require('./queries/health-plan')
const specialtiesMutations = require('./mutations/specialties')
const findAllSpecialties = require('./queries/specialties')
const hospitalMutations = require('./mutations/hospital')
const findAllByStatusEmergency = require('./queries/emergencies')

    
module.exports = {
    Query: {
        ...findAllHealthPlans,
        ...findAllSpecialties,
        ...findAllByStatusEmergency
    },
    Mutation: {
        ...userMutations,
        ...healthPlanMutations,
        ...specialtiesMutations,
        ...hospitalMutations
    }
}