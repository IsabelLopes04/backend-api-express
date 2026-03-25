import {prisma} from '../helpers/dbConnection.js';

//  const user = {
//      name: 'Isabel Lopes'
//      email: 'isabel04lopes@gmail.com',
//      password: 'securePassword',
//      avatar: 'https://example.com/avatar.jpg' ,
//  }

export const createUser = async (user) => {
    return await prisma.user.create({ //se usa dentro de uma função async, a outra tbm sera async(await)
        data: user
    })
}
export const getUsers = async () => { //serve para puxar os user cadastrados 
    return await prisma.user.findMany()
}

export const deleteUser = async(id) => { //função para deletar um id, quando e
    return await prisma.user.delete({
        where: {
            id
        }
    })
}

export const updateUser = async (user, id) => {
    return await prisma.user.update({
        data: user,
        where: {
            id
        }
    })
}

 