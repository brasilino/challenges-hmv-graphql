const HealthPlanService = require('../../../services/health-plan')

const register = async (description) => {
    const service = new HealthPlanService()
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