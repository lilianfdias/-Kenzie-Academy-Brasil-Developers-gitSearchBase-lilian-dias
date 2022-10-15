async function requestUser(user) {
    await fetch(`https://api.github.com/users/${user}`)
        .then(function (response) {
            if(!response.ok){
                throw new Error(`Código de status não esperado: ${response.status}`)
            }
            return response.json()
        })
        .then(async function (data) {
            // renderHeader(data)
            await saveStorage(user)
            found()
        })
        .catch((erro) => {
            notFound()
            console.error(erro)
        })
        .finally(()=>{
            btnProfile.innerText = "Ver perfil do github"
        })
}



function requestRepository(user) {
    fetch(`https://api.github.com/users/${user}/repos`)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            renderLi(data)
        })
}


function notFound() {
    let span = document.querySelector('.user-notfound')
    span.classList.toggle('text-hidden')

}

function found(){
    let span = document.querySelector('.user-notfound')
    span.classList.add('text-hidden') 
}

function requestHome(user){

    fetch(`https://api.github.com/users/${user}`)
        .then(function (response) {
            if(!response.ok){
                throw new Error(`Código de status não esperado: ${response.status}`)
            }
            return response.json()
        })
        .then(function (data) {
            renderHeader(data)
        })
        .catch((erro) => {
            console.error(erro)
        })

}

// RequestHome('dvdscripter')