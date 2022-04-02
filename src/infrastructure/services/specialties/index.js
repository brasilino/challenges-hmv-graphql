class SpecialtiesService {
    constructor(api, host) {
        this.api = api
        this.url = host+'api/especialidades'
    }

    async register(name) {
        try {

            const { data } = await this.api.post(this.url, 
                { 
                    nome: name,
                },
            )

            return {
                id: data.id,
                nome: data.nome,
                data_criacao: data.data_criacao,
                data_atualizacao: data.data_atualizacao,
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

            return {status: true}
        }
        catch(err) {
            console.log('ERRO:', err)
        }
    }
}

module.exports = SpecialtiesService