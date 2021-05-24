import { Request, Response, NextFunction } from 'express';
import  logging  from '../utilites/logging';
import errorModel from '../models/errorModel';
import successModel from '../models/successModel';

const namespace = 'RESPONSE';

const commonResponseHandler = (req: Request,res: Response,err: any, data: any) => {
    if(err && err.message){
        const error = new errorModel(err.message,res.statusCode,false);
        res.status(200).json(error);
    }else if(data){
        const success = new successModel(data,res.statusCode,true);
        res.status(200).json({});
    }else {
        const error = new errorModel(err.message,res.statusCode,false);
        logging.error(namespace,'SERVER ERROR');
        res.status(500).json(error);
    }
}

export {
    commonResponseHandler
}
