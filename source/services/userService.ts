import UserServiceInterface  from './userServiceInterface';
import {Request , Response, NextFunction} from 'express';
import { commonResponseHandler } from '../utilites/reponse';

const namespace = 'UserService'
class UserService implements UserServiceInterface{
    getUserService(req: Request, res: Response): any {
        commonResponseHandler(req,res,null,null);    
    }

    postUserService(req: Request, res: Response): any {
        commonResponseHandler(req,res,null,null);
    }

    putUserService(req: Request, res: Response): any {
        commonResponseHandler(req,res,null,null);
    }

    deleteUserService(req: Request, res: Response): any {
        commonResponseHandler(req,res,null,null);
    }
}

export = UserService