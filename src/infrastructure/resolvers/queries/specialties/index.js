const SpecialtiesService = require('../../../services/specialties')
const axios = require('axios')
const config = require('../../../../config')

const findAll = async () => {
    const { host } = config
    const service = new SpecialtiesService(axios, host)
    const result = await service.findAll()
    return result
}

    
module.exports = {
    async findAllSpecialties(_, args) {
        const result = await findAll();
        return result
    }
}