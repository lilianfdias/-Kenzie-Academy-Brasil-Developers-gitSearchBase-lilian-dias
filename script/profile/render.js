

function renderHeader(user) {
  
  const header = document.querySelector(".header")
  header.replaceChildren()

  const div = document.createElement('div')
  div.classList = "flex a-itens-center gap"

  const img = document.createElement('img')
  img.classList.add("img-profile")
  img.src = user.avatar_url
  div.appendChild(img)

  const divText = document.createElement('div')
  divText.classList = "gap-2 flex column"
  div.appendChild(divText)

  const h3 = document.createElement('h3')
  h3.classList = "title-4 text-color-1"
  h3.innerText = user.name
  divText.appendChild(h3)

  const small = document.createElement('small')
  small.classList = "text-1 color-header-prof"
  small.innerText = user.bio
  divText.appendChild(small)

  const divBtn = document.createElement('div')
  divBtn.classList = "flex gap-2"

  const btnEmail = document.createElement('a')
  btnEmail.classList = "btn button-primary text-color-1 flex a-itens-center"
  btnEmail.innerText = "Email"
  btnEmail.href = `mailto:${user.email}`
  divBtn.appendChild(btnEmail)

  const btnTrocar = document.createElement('a')
  btnTrocar.classList = "btn button-secondary text-color-1 flex a-itens-center"
  btnTrocar.innerText = "Trocar de usuário"
  btnTrocar.href = "../profile/index.html"
  
  divBtn.appendChild(btnTrocar)

  header.append(div, divBtn)

}


function renderLi(array) {
  console.log(array)
  const ul = document.querySelector('.postUl')
    ul.replaceChildren()
  array.forEach(element => {
    const { name, description, id, html_url, homepage} = element

    const li = document.createElement('li')
    li.classList = "flex card column j-content-center"

    const h4 = document.createElement('h4')
    h4.classList.add("text-color-1")
    h4.innerText = name
    li.appendChild(h4)

    const p = document.createElement('p')
    p.classList = "title-3 text-color-1"
    p.innerText = description
    li.appendChild(p)

    const div = document.createElement('div')
    div.classList = "flex gap-2"
    li.appendChild(div)

    const btnRepository = document.createElement('a')
    btnRepository.classList = "button-p button-p-line text-color-1 text-2 flex a-itens-center"
    btnRepository.innerText = "Repositório"
    btnRepository.href = html_url
    btnRepository.id = id
    div.appendChild(btnRepository)

    const btnDemo = document.createElement('a')
    btnDemo.classList = "button-p button-p-line text-color-1 text-2 flex a-itens-center"
    btnDemo.innerText = "Demo"
    btnDemo.href = homepage

    div.appendChild(btnDemo)

    ul.appendChild(li)

  });
}

function renderUserProfile(array) {
  const div = document.getElementsByClassName("ver-perfil")[0]
  div.replaceChildren()
  array.forEach(user => {
    const divProfile = document.createElement('div')
    divProfile.classList = "flex column a-itens-center"

    const img = document.createElement('img')
    img.classList = "img-user"
    img.src = user.avatar_url


    const span = document.createElement('span')
    span.classList = "tag-access text-2 text-color-2 hidden absolute"
    span.innerText = "Acessar perfil"

    divProfile.addEventListener('mouseenter', () => {

      span.classList.toggle('hidden')
    })

    divProfile.addEventListener('mouseleave', () => {

      span.classList.toggle('hidden')
    })

    divProfile.addEventListener('click', () =>{
      window.location.href = `../home/index.html?user=${user.login}`

    })

    
    divProfile.append(img, span)
    div.appendChild(divProfile)


  });



}





// <img class="img-user " src="../../assets/img/Ellipse 2.png" alt="">
//               <span class="tag-access text-2 text-color-2 hidden">Acessar perfil</span>


{/* <li class="flex card column j-content-center">
              <h4 class="text-color-1">Project Module 2 - Kenzie</h4>
              <p class="text-color-1">Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like</p>
              <div class="flex gap-2">
                <button class="button-p button-p-line text-color-1 text-2">Repositório</button>
                <button class="button-p button-p-line text-color-1 text-2">Demo</button>
              </div>
            </li> */}





{/* <header class="flex m-bot m-top j-content-between a-itens-center">
        <div class="flex a-itens-center gap">
          <img class="img-profile" src="${responseJson.avatar_url}" alt="">
          <div class="gap-2 flex column">
            <h3 class="title-4 text-color-1">"${responseJson.name}"</h3>
            <small class="text-1 color-header-prof">"${responseJson.bio}"</small>
          </div>
        </div>
        <div class="flex gap-2 ">
          <button class="btn button-primary text-color-1">Email</button>
          <button class="btn button-secondary text-color-1">Trocar de usuário </button>
        </div>
      </header> */}