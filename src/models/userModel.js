import { partial } from 'zod/mini';
import {prisma} from '../helpers/dbConnection.js';
import * as z  from 'zod';

//  const user = {
//      name: 'Isabel Lopes'
//      email: 'isabel04lopes@gmail.com',
//      password: 'securePassword',
//      avatar: 'https://example.com/avatar.jpg' ,
//  }

const userSchema = z.object({
    id: z.int().positive(),
    avatar: z.string().url().max(500),
    name: z.string().min(3).max(255),
    email: z.string().email(),
    pass: z.string().min(6).max(255)
})

export const validatedUser =(user, partial = false) => {
    if(partial){
        return userSchema.partial({...partial}).safeParse(user)
    }
    return userSchema.safeParse(user)
}

export const createUser = async (user) => {
    const validatedUser = userSchema.parse(user)
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

 