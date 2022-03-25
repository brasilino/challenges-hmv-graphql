class SpecialtiesService {
    constructor(api, host) {
        this.api = api
        this.url = host+'especialidades'
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
}

module.exports = SpecialtiesService