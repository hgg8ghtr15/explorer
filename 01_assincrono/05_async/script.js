const pedido = false

const promessa = new Promise(function(resolve, reject) {

    if (pedido) {
        return resolve('ok')
    }

    return reject('error')  
})

async function start() {
    try {
        const result = await promessa
        console.log(result)
    } catch (error) {
        console.log(error)
    }finally {
        console.log('Executou')
    }
}

start()



