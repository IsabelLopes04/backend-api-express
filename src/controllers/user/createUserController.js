import { createUser, validatedUser} from "../../models/userModel.js"
 
 export async function createUserController(req, res){

   const user = req.body

   const {success, error, data} = validatedUser(user, {id:true})

   if(!success){
      return res.status(400).json({
         message: "Erro de validação",
         fieldErrors: error.flatten().fieldErrors
      })
   }

   const result = await createUser(user)

   res.json ({
        message: "Usuario criado com sucesso",
        user: result
   })
 }
