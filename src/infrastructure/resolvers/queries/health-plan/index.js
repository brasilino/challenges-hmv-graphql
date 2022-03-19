const HealthPlanService = require('../../../services/health-plan')
const axios = require('axios')
const config = require('../../../../config')

const findAll = async () => {
    const { host } = config
    const service = new HealthPlanService(axios, host)
    const result = await service.findAll()
    return result
}

    
module.exports = {
    async findAllHealthPlans(_, args) {
        const result = await findAll();
        return result
    }
}