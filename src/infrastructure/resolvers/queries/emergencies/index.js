const EmergenciesService = require('../../../services/emergencies')
const axios = require('axios')
const config = require('../../../../config')

const findAllByStatusEmergency = async () => {
    const { host } = config
    const service = new EmergenciesService(axios, host)
    const result = await service.findAllByStatusEmergency()
    return result
}

    
module.exports = {
    async findAllByStatusEmergency(_, args) {
        const result = await findAllByStatusEmergency();
        return result
    }
}