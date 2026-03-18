import { getPubli } from "../../models/publicationModel.js"

export async function  getPubliController(req, res){

const  result = await getPubli()

    res.json({
        Message: "Usuarios listados com sucesso!",
        publication: result
    })
}