import {Request , Response, NextFunction} from 'express';
import UserControllerInterface from './userContollerInterface';
import UserService from '../services/userService'; 

export class UserController implements UserControllerInterface {
     getUserContoller(req: Request, res: Response): any {
          UserService.prototype.getUserService(req,res);
     }
     postUserContoller(req: Request, res: Response): any {
          UserService.prototype.postUserService(req,res);
     }
     putUserContoller(req: Request, res: Response): any {
          UserService.prototype.putUserService(req,res);
     }
     deleteUserContoller(req: Request, res: Response): any {
          UserService.prototype.deleteUserService(req,res);
     }
}
