//const exprees = require('express')
import express from 'express'
import userRouter from './routers/userRouter.js'
import publicationRouter from './routers/publicationRouter.js'
import { logger } from './middlewares/logger.js'

const app = express()
const port = 3000

app.use(logger)
app.use(express.json()) //pegar o Json que chegou e converte para objeto e guarda no req.body

app.get('/',(req, res) => { 
    res.send("Hello world Express API!!") 
})      

app.use('/user', userRouter)
app.use('/publication', publicationRouter)

app.listen (port, () => {
    console.log(`Servidor rodando na em http://localhost:${port}`)
})
