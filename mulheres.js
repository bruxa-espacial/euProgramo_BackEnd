const express = require("express")  //iniciandoo express

const router = express.Router() //configurando a primeira parte da rota

const app = express() //iniciando o app
// app recebe a chamada da função express

const porta = 3333 //criando a porta

//criando lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutora'
    },
    {
        id: '2',
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria'
    },{
        id: '3',
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer'
    }
]

//GET
function mostraMulheres(request, response){
   response.json(mulheres)
}

//POST
function criaMulher(request, response){
    const novaMulher = {
        id: '',
        nome:'',
        imagem:'',
        minibio:''
    }
}

//PORTA
function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres)) //configurei rota GET /mulheres
app.listen(porta, mostraPorta) //servidor ouvindo a porta
//após ouvir a porta, chama a função mostraPorta