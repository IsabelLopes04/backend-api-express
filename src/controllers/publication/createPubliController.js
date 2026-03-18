import { createPubli } from "../../models/publicationModel.js"

     export async function createPubliController(req, res){
     
         const publi = req.body
     
         console.log ("Dados recebidos para criação do usuario", publi)
     
          const result = await createPubli(publi)
     
          res.json ({
             message: "Publication criado com sucesso",
             publi: result
          })
      }
 