import {Request , Response, NextFunction} from 'express';
import { commonResponseHandler } from '../utilites/reponse';
import UserControllerInterface from './userContollerInterface';

export class UserController implements UserControllerInterface {
     getUserContoller(req: Request, res: Response): any {
          commonResponseHandler(req,res,null,null);
     }
     postUserContoller(req: Request, res: Response): any {

     }
     putUserContoller(req: Request, res: Response): any {

     }
     deleteUserContoller(req: Request, res: Response): any {

     }
}
