//.env
import dotenv from 'dotenv';
dotenv.config()

import { Router } from "express";

//cache
import pkg from 'express-api-cache';
const { cache } = pkg;

import pkg2 from 'cors';
const cors = pkg2;

//errors
import errors from '../errors.js'
const LongTitleError = errors.LongTitleError;

const router = Router();
const server = router; //server yazmak alışkanlık oldu

async function test(req) {
    throw new LongTitleError("123456",req.body)
}

server.get("/", cors(), cache("5 seconds"), (req,res,next) => {
    test(req)
    .then(data => res.send(data))
    .catch(err => next(err))
});

server.get("/404", cors(), (req,res,next) => {
    res.send("ERROR !")
});

server.all('*', function(req, res, next){
    if(req.method == "GET") {
        res.redirect("/404")
    } else {
        next({
            name:`${req.method}[${req.path}] not found`,
            type:"not-found",
            message:`You cannot ${req.method} this path!`,
            statusCode:404 
        })
    }
});

export default router;