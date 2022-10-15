/* Desenvolva sua lógica aqui...*/
const form = document.querySelector('form')
const input = document.querySelector('input') 
const btnProfile = document.querySelector('.btnProfile')




form.addEventListener('submit',(event) =>{
    // console.log('click')
    event.preventDefault()
    const user = input.value
    requestUser(user)
    btnProfile.innerHTML = '<img class="rotate-center" src="../../assets/img/spinner.svg">'
    input.value = ""
    window.location.href = `../pages/home/index.html?user=${user}`

})

async function saveStorage(user){
    let users = JSON.parse(localStorage.getItem('users')) || []
    if(users.length >= 3){
        users.shift()
    }
    users.push(user)

    localStorage.setItem('users', JSON.stringify(users))

    let userData = []
    for (user of users) {
        const response = await fetch(`https://api.github.com/users/${user}`)
        const data = await response.json()
        userData.push(data)
    }
    renderUserProfile(userData)
}

input.addEventListener('input', () =>{
    if(input.value.length > 0){
        btnProfile.classList.add("button-primary-active")
        btnProfile.classList.remove("button-primary-inactive")
        btnProfile.disabled = false

    }else{
        btnProfile.classList.remove("button-primary-active")
        btnProfile.classList.add("button-primary-inactive")
        btnProfile.disabled = true

    }
})

async function loadSaved() {
    let users = JSON.parse(localStorage.getItem('users')) || []
    let userData = []
    for (let user of users) {
        const response = await fetch(`https://api.github.com/users/${user}`)
        const data = await response.json()
        userData.push(data)
    }
    renderUserProfile(userData)
}

window.onload = loadSaved()

