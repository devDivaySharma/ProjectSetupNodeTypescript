import {Request , Response, NextFunction} from 'express';
import { commonResponseHandler } from '../utilites/reponse';

const userGetContoller = (req: Request, res: Response, next: NextFunction ) => {
    commonResponseHandler(req,res,null,null);
}

const userPostContoller = (req: Request, res: Response, next: NextFunction ) => {
    commonResponseHandler(req,res,null,null);
}
const userPutContoller = (req: Request, res: Response, next: NextFunction ) => {
    commonResponseHandler(req,res,null,null);
}

const userDeleteContoller = (req: Request, res: Response, next: NextFunction ) => {
    commonResponseHandler(req,res,null,null);
}


export { userGetContoller,userPostContoller,userPutContoller,userDeleteContoller }
