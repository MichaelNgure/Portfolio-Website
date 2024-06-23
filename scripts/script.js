const themeButton = document.querySelector('#themeButton')
themeButton.addEventListener('click', theme)

function theme(){
    if (themeButton.textContent === 'Light mode'){
        document.body.style.backgroundColor = 'gray'
        document.body.style.color = 'black'
        themeButton.textContent = 'Dark mode'
    }else {
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
        themeButton.textContent = 'Light mode'
    }
}

const projectDetails = document.getElementById('projectDetails')
const hireButton = document.getElementById('hireButton')
hireButton.addEventListener('click', hire)

function hire(){
    const name = prompt('What is your name?')
    const par = document.createElement('p')
    par.textContent = `Hey ${name}! Thank you for choosing me! You can find my contacts details below.`
    par.style.color = 'green'
    projectDetails.append(par)
}