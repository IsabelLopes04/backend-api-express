import {prisma} from '../helpers/dbConnection.js';

export const createPubli = async (publi) => {
    return await prisma.publication.create({ //se usa dentro de uma função async, a outra tbm sera async(await)
        data: publi
    })
}

export const getPubli = async () => { //serve para puxar os user cadastrados 
    return await prisma.publication.findMany()
}