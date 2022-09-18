function imprimirDados (dado){
    console.log("outra")
    console.log(dado())    
}

// imprimirDados(1) //
// imprimirDados("texto") //
// imprimirDados(true) //
// imprimirDados({name:"fabio"}) //
// imprimirDados([1,2,3,4]) //

imprimirDados(function(){
    return "ola mundo"
})
