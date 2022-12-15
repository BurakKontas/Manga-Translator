//modules
import express, { json } from "express";
import chalk from "chalk";

//routes
import router from './Config/routes.js';

//cors
import pkg2 from 'cors';
const cors  = pkg2;
//.env
import dotenv from 'dotenv';
import { ErrorLogger, FailSafeHandler, ErrorResponder } from './Config/middlewares/middleware.js';
dotenv.config()

//secrets
const PORT = process.env.PORT;

//settings
const server = express();
server.use(json());
server.use(router)

//cors
server.use(cors({
    origin:'*',
    methods:['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))

//middleware (sırası çok önemli)
server.use(ErrorLogger)
server.use(ErrorResponder)
server.use(FailSafeHandler)

//endpoints
server.listen(PORT || 3000, () => {
    console.log(chalk.blue(`Our app is running on port ${ PORT }`));
    //scraping all endpoints and methods from express
    var paths = [];
    var routers = ["router"]
    server._router.stack.filter(layer => routers.includes(layer.name))[0].handle.stack.forEach((layer) => {
        try{
            paths.push({
                path:layer.route.path,
                method:(layer.route.stack[0].method != undefined) ?  layer.route.stack[0].method : "All"
            });
        } catch(err) {
            paths.push({
                path:layer.route.path,
                method:null
            })
        }
    });
    console.log(chalk.magenta("Active EndPoints\n") + paths.map((path) => "\b"+ chalk.bold.yellowBright(path.method.toUpperCase()) + chalk.bold.whiteBright("[" + path.path + "]") + " "))
});

export default server;

// server.get
// server.post
// server.put
// server.delete
// server.options
// server.head
// server.copy
// server.patch
// server.lock
// server.unlock
// server.propfind
// server.purge