const HealthPlanService = require('../../../services/health-plan')
const axios = require('axios')
const config = require('../../../../config')

const register = async (description) => {
    const { host } = config
    const service = new HealthPlanService(axios, host)
    const result = await service.register(description)
    return result
}

const deleteHealthPlan = async (id) => {
    const { host } = config
    const service = new HealthPlanService(axios, host)
    const result = await service.delete(id)
    return result
}

    
module.exports = {
    async register(_, args) {
        const { description } = args;
        const result = await register(description);
        return result
    },
    async deleteHealthPlan(_, args) {
        const { id } = args;
        const result = await deleteHealthPlan(id);
        return result
    }
}