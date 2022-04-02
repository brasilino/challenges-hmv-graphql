class EmergenciesService {
    constructor(api, host) {
        this.api = api
        this.url = host+'api/emergencias'
    }

    async findAllByStatusEmergency() {
        try {
            const { data } = await this.api.get(this.url)

            return data
        }
        catch(err) {
            console.log('ERRO:', err)
        }
    }

    async findById(id) {
        try {
            const { data } = await this.api.get(this.url+'/'+id)

            return { content: data }
        }
        catch(err) {
            console.log('ERRO:', err)
        }
    }
}

module.exports = EmergenciesService