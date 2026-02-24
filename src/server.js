
//const exprees = require('express')
import express from 'express'

const app = express()
const port = 3000

app.get('/',(req, res) => { 
    res.send("Hello world Express API!!") 
}) 

app.get('/user',(req, res) => { 
    res.send("Aqui esta a lista de usuarios!")  
})

app.listen (port, () => {
    console.log(`Servidor rodando na em http://localhost:${port}`)
})
