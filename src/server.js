//const exprees = require('express')
import express from 'express'
import userRouter from './routers/userRouter.js'
import publicationRouter from './routers/publicationRouter.js'
import { logger } from './middlewares/logger.js'
import { errorHandler } from './middlewares/errorHandler.js'
import { error404 } from './middlewares/error404.js'

const app = express()
const port = 3000

app.use(logger)
app.use(express.json()) //pegar o Json que chegou e converte para objeto e guarda no req.body

app.get('/',(req, res) => { 
    res.json("Hello world Express API!!") 
})      

app.use('/user', userRouter)
app.use('/publication', publicationRouter)

app.use(error404);
app.use(errorHandler)

app.listen (port, () => {
    console.log(`Servidor rodando na em http://localhost:${port}`)
})
