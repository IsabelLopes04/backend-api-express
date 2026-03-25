import { updatePubli } from "../../models/publicationModel.js"

export async function updatePubliController(req, res){
    const {id} = req.params
    const publication = req.body

    const result = await updatePubli(publication, +id)

    return res.json({
        message: "Usuário atualizado com sucesso!",
        publication: result
    })
    
}