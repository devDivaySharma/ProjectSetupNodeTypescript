import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logging from './utilites/logging';
import config from './configs/config';
import router from './routes/routes';

const namespace = 'Server';
const app = express();


/**
 * logging the request
*/
app.use((req,res,next) => {
    logging.info(namespace,`METHOD - [${req.method}] : URL - [${req.url}] : Ip - [${req.socket.remoteAddress}]`);

    res.on('finish',() => {
        logging.info(namespace,`METHOD - [${req.method}] : URL - [${req.url}] : Ip - [${req.socket.remoteAddress}] : STATUS - ${res.status}`);
    });

    next();
});

/**
 * Check response and set body limit
*/
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

/**
 * Check Allowed Orign's and Allowed Methods
*/
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization");

    if(req.method == "OPTIONS"){
        res.header("Access-Control-Allow-Methods","GET PUT POST DELETE PATCH");
        res.status(200).json();
    }
    next();
})

/**
 * Setup app
*/

app.use('/api',router);

/**
 * Error Handelling
*/
app.use((req,res,next) => {
    const error = new Error("Not Found");
    return res.status(404).json({
        message : error.message
    });
})

/**
 * Setup server 
*/
const httpServer = http.createServer(app);
httpServer.listen(config.PORT,() => {
    logging.info(namespace,`Server has been started at ${config.HOSTNAME}:${config.PORT}`);
});