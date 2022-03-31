class EmergenciesService {
    constructor(api, host) {
        this.api = api
        this.url = host+'emergencias'
        this.config = {
            headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDg3NjQxMjAsInVzZXJfbmFtZSI6InRhbmdvbWFzdGVyMTAxMEBobXYtbWFzdGVyLmNvbS5iciIsImF1dGhvcml0aWVzIjpbIlJPTEVfTUFTVEVSIl0sImp0aSI6ImY1M2ExZmNmLTg2ZTgtNDI0MS1iNmIwLWY4ZTgzODQzODA1NCIsImNsaWVudF9pZCI6Imhtdi1jbGllbnRzLXRhbmdvMTAxMCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdfQ.mkeux072OQDw4zN_THSkyQBJuzvehX-f6wwOIvJL-ek` }
        };
    }

    async findAllByStatusEmergency() {
        try {
            const { data } = await this.api.get(this.url, this.config)

            return data
        }
        catch(err) {
            console.log('ERRO:', err)
        }
    }

    async findById(id) {
        try {
            const { data } = await this.api.get(this.url+'/'+id, this.config)

            return { content: data }
        }
        catch(err) {
            console.log('ERRO:', err)
        }
    }
}

module.exports = EmergenciesService