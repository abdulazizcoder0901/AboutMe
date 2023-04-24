// Responsive Navbar
let navbarRight = document.querySelector('.navbar-right')
let addMenu = document.querySelector('.add-menu')
addMenu.addEventListener('click', () => {
    navbarRight.classList.toggle('active')
})
// Responsive Navbar

// Night Mode
let body = document.querySelector('body')
let btn = document.querySelector('.btn')
let icon = document.querySelector('.btn-icon')

function store(value){
    localStorage.setItem('darkmode', value)
}

function load (){
    const darkmode = localStorage.getItem('darkmode')
    if(darkmode == 'true'){
        body.classList.add('darkmode')
        icon.classList.add('fa-moon')
    }else if(darkmode == 'false'){
        icon.classList.add('fa-sun')
    }
}

load()

btn.addEventListener('click', () =>{
    body.classList.toggle('darkmode')
    icon.classList.add('animated')

    store(body.classList.contains('darkmode'))

    if(body.classList.contains('darkmode')){
        icon.classList.remove('fa-sun')
        icon.classList.add('fa-moon')
    }else{
        icon.classList.remove('fa-moon')
        icon.classList.add('fa-sun')
    }

    setTimeout(() =>{
        icon.classList.remove('animated')
    },500)
})
// Night Mode

// Form Section
let formInfo = JSON.parse(localStorage.getItem('formInfo'))
let form = document.querySelector('form')
let nameInput = document.querySelector('#name')
let lastNameInput = document.querySelector('#lastName')
let emailInput = document.querySelector('#email')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    let name = nameInput.value.trim()
    let lastName = lastNameInput.value.trim()
    let email = emailInput.value.trim()

    if(name && lastName && email){
        if(!formInfo){
            formInfo = []
        }

        let obj = {
            name,
            lastName,
            email
        }
        formInfo.push(obj)
        localStorage.setItem('formInfo', JSON.stringify(formInfo))
        nameInput.value = ""
        lastNameInput.value = ""
        emailInput.value = ""
    }else{
        alert('Please! Fill The Inputs...')
    }
})
// Form Section