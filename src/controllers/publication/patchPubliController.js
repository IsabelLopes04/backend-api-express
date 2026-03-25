 import { updatePubli } from "../../models/publicationModel.js"

export async function patchPubliController(req, res){
        const {id} = req.params
        const title = req.body.title
    
        const result = await updatePubli({title}, +id)
    
        return res.json({
            message: "Usuário atualizado com sucesso!",
            publication: result
        })
}