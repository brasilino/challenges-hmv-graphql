const HospitalService = require('../../../services/hospital')
const axios = require('axios')
const config = require('../../../../config')

const register = async (name) => {
    const { host } = config
    const service = new HospitalService(axios, host)
    const result = await service.register(name)
    return result
}

    
module.exports = {
    async hospitalRegister(_, args) {
        const result = await register(args);
        return result
    },
}