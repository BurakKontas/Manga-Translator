import chalk from "chalk";

// for logging errors
export function ErrorLogger(error, req, res, next) { 
    //loglama işlemleri buraya gelecek
    console.info(chalk.blueBright("Middleware Kullanıldı")) 
    console.error(chalk.redBright(JSON.stringify(error,null,Object.keys(error).length))) // adding some color to our logs
    next(error)
}

// responding to client
export function ErrorResponder(error, req, res, next) { 
    if (error.type == 'redirect')
        res.redirect('/error')
    else if (error.type == 'time-out') 
        res.status(408).send(error)
    else
        next(error)
    }
    
// generic handler
export function FailSafeHandler(error, req, res, next) { 
    res.status(error.statusCode).send(JSON.stringify(error,null,Object.keys(error).length)) // pretty print
}