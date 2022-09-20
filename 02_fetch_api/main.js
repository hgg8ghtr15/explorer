const url = "http://localhost:5500/api"

function getUsers(){
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.log(error))
}

function getUser(id){
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data =>{ 
        // renderApiResult.textContent = JSON.stringify(data)
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
        })
    .catch(error => console.log(error))
}

function addUser(newUser){
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(newUser),
        headers:{
            "Content-Type": "application/json; charset=utf-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.log(error))
}

function updatedUser(userUpdate,id){
    fetch(`${url}/${id}`,{
        method: 'PUT',
        body: JSON.stringify(userUpdate),
        headers: { "Content-Type": 'application/json; charset=utf-8'}
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.log(error))
}


function deleteUser(id){
    fetch(`${url}/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.log(error))
}


const newUser = {
    name: "Fabio",
    avatar: "https://picsum.photos/id/237/200/300",
    city: "caceres"
}

const userUpdate = {
    name : "Maria",
    avatar: "https://picsum.photos/id/237/200/300",
    city: "cacere"
}




// updatedUser(userUpdate, 1)
// addUser(newUser)

getUser(1)
getUsers()

deleteUser(5)

