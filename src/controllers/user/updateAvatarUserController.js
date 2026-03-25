import { updateUser } from "../../models/userModel.js"

export async function updateAvatarUserController(req, res){
    const {id} = req.params
        const avatar = req.body.avatar
    
        const result = await updateUser({avatar}, +id)
    
        return res.json({
            message: "Usuário atualizado com sucesso!",
            user: result
        })
}