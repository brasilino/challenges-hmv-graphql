const axios = require('axios')

class HealthPlanService {
    constructor() {}

    async register(description) {
        try {

            const { data } = await axios.post('http://localhost:8080/api/convenios', 
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
}

module.exports = HealthPlanService