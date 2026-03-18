import { createUser } from "../../models/userModel.js"
 
 export async function createUserController(req, res){

    const user = req.body

    console.log ("Dados recebidos para criação do usuario", user)

     const result = await createUser(user)

     res.json ({
        message: "Usuario criado com sucesso",
        user: result
     })
 }
