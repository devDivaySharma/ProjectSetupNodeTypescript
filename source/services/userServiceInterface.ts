import {Request , Response, NextFunction} from 'express';
interface UserServiceInterface {
     getUserService(req: Request, res: Response, next: NextFunction): any
     postUserService(req: Request, res: Response, next: NextFunction): any
     putUserService(req: Request, res: Response, next: NextFunction): any
     deleteUserService(req: Request, res: Response, next: NextFunction): any
}

export  = UserServiceInterface