class HealthPlanService {
    constructor(api, host) {
        this.api = api
        this.url = host+'convenios'
    }

    async register(description) {
        try {

            const { data } = await this.api.post(this.url, 
                { 
                    descricao: description,
                },
            )

            return {
                id: data.id,
                descricao: data.descricao,
                dataCriacao: data.dataCriacao,
                dataAtualizacao: data.dataAtualizacao,
                status: data.status
            }
        }
        catch(err) {
            console.log('ERRO:', err)
        }
    }

    async findAll() {
        try {

            const { data } = await this.api.get(this.url)

            return data
        }
        catch(err) {
            console.log('ERRO:', err)
        }
    }

    async delete(id) {
        try {

            const { data } = await this.api.delete(this.url+'/'+id)

            console.log('deleteHealthPlan:', data)

            return {status: true}
        }
        catch(err) {
            console.log('ERRO:', err)
        }
    }
}

module.exports = HealthPlanService