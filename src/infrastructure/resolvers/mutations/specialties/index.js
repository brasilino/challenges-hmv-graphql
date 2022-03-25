const SpecialtiesService = require('../../../services/specialties')
const axios = require('axios')
const config = require('../../../../config')

const register = async (name) => {
    const { host } = config
    const service = new SpecialtiesService(axios, host)
    const result = await service.register(name)
    return result
}

const deleteSpecialtie = async (id) => {
    const { host } = config
    const service = new SpecialtiesService(axios, host)
    const result = await service.delete(id)
    return result
}

    
module.exports = {
    async registerSpecialties(_, args) {
        const { name } = args;
        const result = await register(name);
        return result
    },
    async deleteSpecialtie(_, args) {
        const { id } = args;
        const result = await deleteSpecialtie(id);
        return result
    }
}