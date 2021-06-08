/*class ConsultaCep{

    consultaCep(cep, funcionou, falhou){
        const url = `https://viacep.com.br/ws/${cep}/json/`
        fetch(url)
        .then(function(resposta){
            return resposta.json()
        })
        .then(function(dados){
            funcionou(dados)
        })
        .catch(function(erro){
            falhou(erro)
        })
    }
    
}


export default ConsultaCep */

fetch('https://pokeapi.co/api/v2/pokemon/infernape')
        .then(res => {
            return res.json()
        })
        .then(data => console.log(data))
        .catch(error => console.log('error'))