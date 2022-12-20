// ------------------------------------------------------------------------
// Método GET:
const url = 'http://localhost:5500/api'


// function getUsers() {
//     axios.get(url)
//     .then(response => {
//         console.log(response.data)
//         apiResult.textContent = JSON.stringify(response.data)
//     })
//     .catch(error => console.error(error))
// }

// getUsers()

// --------------------------------------------------------------------
// Método POST (inserção de dados na API através do AXIOS)

// function getUsers() {
//     axios.get(url)
//     .then(response => {
//         console.log(response.data)
//         apiResult.textContent = JSON.stringify(response.data)
//     })
//     .catch(error => console.error(error))
// }

// function addNewUser() {
//     axios.post(url)
//     .then(response => {
//         console.log(response)
//     })
//     .catch(error => console.error(error))
// }

// const newUser = {
//     name: "Rodrigo Marques", 
//     avatar: "https://picsum.photos/200/300", 
//     city: "Maceió",
// }

// getUsers()
// addNewUser(newUser)

// --------------------------------------------------------------------
// GET com parâmetros (usuários específicos)

function getUsers() {
    axios.get(url)
    .then(response => {
        console.log(response.data)
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser() {
    axios.post(url)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}
function getUser() {
    axios.get('http://localhost:5500/api/3')
    .then(response => {
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent = data.id
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}


const newUser = {
    name: "Rodrigo Marques", 
    avatar: "https://picsum.photos/200/300", 
    city: "Maceió",
}

getUsers()
addNewUser(newUser)
getUser()