const pedido = false

console.log('Pedir uber')

const promessa = new Promise((resolve, reject)=>{
    
    if (pedido) {
        return resolve('Carro Chegou')
    }
    return reject("Pedido negado")
})

console.log('Aguardando')

promessa
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(()=> console.log('Finished'));