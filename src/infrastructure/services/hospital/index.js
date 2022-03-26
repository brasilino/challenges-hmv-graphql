class HospitalService {
    constructor(api, host) {
        this.api = api
        this.url = host+'hospitais'
    }

    async register(hospital) {
        try {

            const { data } = await this.api.post(this.url, 
                {
                    nome_unidade: hospital.name,
                    endereco: {
                        descricao: hospital.description,
                        logradouro: hospital.publicPlace,
                        numero: hospital.number,
                        complemento: hospital.complement,
                        cidade: hospital.city,
                        uf: hospital.uf,
                        cep: hospital.zipCode
                    }
                },
            )

            return data
        }
        catch(err) {
            console.log('ERRO:', err)
        }
    }
}

module.exports = HospitalService