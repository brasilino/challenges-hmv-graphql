const HealthPlanService = require('../../../services/health-plan')
const axios = require('axios')
const config = require('../../../../config')

const register = async (description) => {
    const { host } = config
    const service = new HealthPlanService(axios, host)
    const result = await service.register(description)
    return result
}

    
module.exports = {
    async register(_, args) {
        const { description } = args;
        const result = await register(description);
        return result
    }
}