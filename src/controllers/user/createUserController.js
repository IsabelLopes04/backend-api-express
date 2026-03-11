
 export async function createUserController(req, res){

    const user = {
        avatar: "https://github.com/IsabelLopes04.png",
        name: "Isabel Lopes",
        email: "isabel04lopes@gmail.com",
        pass: "123456789"
    }
     const result = await createUser(user)

     res.json ({
        message: "Usuario criado com sucesso",
        user: result
     })
 }