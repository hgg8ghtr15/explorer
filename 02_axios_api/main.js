const url = "http://localhost:5500/api"

function getUsers(){
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
        // console.log(response.data)
    })
    .catch(error => console.log(error))
}


function addUser(newUser){
    axios.post(url, newUser)
    .then(response => {
        mensagem.textContent = response.data
        console.log(response)
    })
    .catch(error => console.log(error))
}

function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userId.textContent = data.id
        user.textContent = data.name
        city.textContent = data.city
        avatar.src = data.avatar
    })
    .catch(error => console.log(error))
}


function updadeUser(editUser,id){
    axios.put(`${url}/${id}`,editUser)
    .then(response => {
        mensagem.textContent = response.data
        // console.log(response.data)
    })
    .catch(error => console.log(error))


}

function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => {
        mensagem.textContent = response.data
    })
    .catch(error => console.log(error))
}


const newUser = {
    name :"Fabio",
    avatar:"https://picsum.photos/200/300",
    city: "Caceres"
}
const editUser = {
    name :"Lucas",
    avatar:"https://picsum.photos/200/300",
    city: "Caceres"
}


getUsers()

// addUser(newUser)

getUser(4)

// updadeUser(editUser,1)

deleteUser(10)