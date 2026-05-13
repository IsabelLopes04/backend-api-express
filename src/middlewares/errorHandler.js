 export const errorHandler = (error, req, res, next) =>{
    console.log(error.message)
    console.log(error.name)
    
    if(error?.message?.includes("NotFoundError")){

        return res.status(500).json({
            message: "Erro de Sintaxe no JSON. Por Favor verifique o formato do JSON enviado." 
        })
    }

    return res.status(500).json({
        message: "Erro no servidor. Por favor tente novamente mais tarde." 
    })

    
 }