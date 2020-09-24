let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.getElementById('mapa')
let foo;

let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'
        nomeOk = false
    } else {
        txt.innerHTML = ''
        nomeOk = true
    }
}

function validaEmail() {
    let txt = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txt.innerHTML = 'Email inválido'
        txt.style.color = 'red'
        emailOk = false
    } else {
        txt.innerHTML = ''
        emailOk = true
    }
}

function validaAssunto() {
    let txt = document.querySelector('#txtAssunto')
    if(assunto.value.length > 100){
        txt.innerHTML = 'Você excedeu o limite de caracteres (100).'
        txt.style.color = 'red'
        assuntoOk = false
    } else {
        txt.innerHTML = ''
        assuntoOk = true
    }
}

function enviar() {
    if(assuntoOk && emailOk && nomeOk)
        alert('Formulário enviado com sucesso')
    else
        alert('Preencha os campos corretamente antes de enviar')
}

function mapaNormal() {
    mapa.style.height = '450px'
    mapa.style.width = '600px'
}

function mapaZoom() {
    mapa.style.height = '600px'
    mapa.style.width = '800px'
}