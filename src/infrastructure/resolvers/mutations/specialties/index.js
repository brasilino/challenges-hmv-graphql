const SpecialtiesService = require('../../../services/specialties')
const axios = require('axios')
const config = require('../../../../config')

const register = async (name) => {
    const { host } = config
    const service = new SpecialtiesService(axios, host)
    const result = await service.register(name)
    return result
}

    
module.exports = {
    async registerSpecialties(_, args) {
        const { name } = args;
        const result = await register(name);
        return result
    },
}