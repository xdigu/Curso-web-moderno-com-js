function tratamentoDeErro(erro){
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date,  
    }
        console.log(erro.name)
        console.log(erro.message)
}

function imprimirNomeGritando (obj){
    try {
        console.log(obj.name.toUpperCase()+"!!!")
    }catch (erro){
        tratamentoDeErro(erro)
    } finally{
        console.log("passou por aqui")
        
    }
    
}

const obj = { nome: "Rodrigo"}

imprimirNomeGritando(obj)