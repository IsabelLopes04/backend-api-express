import {prisma} from '../helpers/dbConnection.js';

export const createPubli = async (publi) => {
    return await prisma.publication.create({ //se usa dentro de uma função async, a outra tbm sera async(await)
        data: publi
    })
}

export const getPubli = async () => { //serve para puxar os user cadastrados 
    return await prisma.publication.findMany()
}

export const deletePubli = async (id) => { //função para deletar um id, quando e
    return await prisma.publication.delete({
        where: {
            id
        }
    })

}
export const updatePubli = async (publication, id) => {
    return await prisma.publication.update({
        data: publication,
        where: {
            id
        }
    })
}