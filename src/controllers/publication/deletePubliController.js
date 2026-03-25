 import { deletePubli } from "../../models/publicationModel.js"

 export async function deletePubliController(req, res){

     const id = req.params.id
         
     
         const result = await deletePubli(+id) // operador "+" para converter String para number 
     
         return res.json ({
             message: "Publication deletado com sucesso!",
             publication: result
         })
     
 }