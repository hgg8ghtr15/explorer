

// Variaveis
let nome : string = "nome";

let nome2: Array<string> 
nome2 = ["a", "b", "c", "d", "e", "fill"]



// Funções

function showMessage(message: string): void {

}
function showMessage2(message: string): string {
    return "oi"
}

function showMessage3(message: string): number {
    return 10
}

function showMessage4(message: string): object {
    return {numero :10}
}

// Union
function showMessage5(message: string | number): object {
    return {numero :10}
}
showMessage5(10)
showMessage5("10")

// Generic
    // 
    // S = state
    // T = type
    // K = key
    // V = value
    // E = element
    // 

function useState <T extends string | number = string> (){
    let state: T ;

    function get( ){
        return state;
    }

    function set(newValor: T){
        state = newValor;
    }

    return {get, set};
}

let newState = useState<number>();
newState.get();
// newState.set("teste");
newState.set(10);



// type
type IdType = number | string | undefined
let user: IdType

user = 10
user = "oi"
user = "oi"
// user = true



// type assertions
type UserResponse = {
    ui: number;
    name: string;
    avatar: string;
}

let userResponse = {} as UserResponse;
userResponse.ui = 10
userResponse.name = "oi";
userResponse.avatar = "https://www.google.com/img/"



// tipando objetos
type Point = {
    x: number;
    y: number;
}
function printCoord(points: Point){
    console.log(`Eixo x = ${points.x}`)
    console.log(`Eixo y = ${points.y}`)
}
printCoord({x:10, y:10})

// tipando objetos
type User = {
    name: string;
    email: string;
    ege: number;
    isAdmin?: boolean; // tipando objetos
}

const usuario: User = {
    name: 'usuario',
    email: 'usuario@gmail.com',
    ege: 36,

}

/// intersecção de Tipo
type Usuario = {
    name: string,
    idade: number;
}
type Car = {
    level: number;
    tipo: string;
}
type Infor = Usuario & Car;

let info: Infor = {
    name: "Fabio",
    idade: 36,
    level:10,
    tipo: "Elfo"

}

//interface
interface Dog {
    id:number;
    name?: string;
}
interface Dog2 {
    id:number;
    name?: string;
}

//-------union de interface
interface Dog3 extends Dog,Dog2 {
    id:number;
    name?: string;
}

let dog1: Dog ={
    id:1,
    name:" Fabio"
}

function newDogRegister(newDog:Dog){
    console.log(newDog.id)
}

















