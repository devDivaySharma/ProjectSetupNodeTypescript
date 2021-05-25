import {Request , Response} from 'express';
interface UserServiceInterface {
     getUserService(req: Request, res: Response): any
     postUserService(req: Request, res: Response): any
     putUserService(req: Request, res: Response): any
     deleteUserService(req: Request, res: Response): any
}

export  = UserServiceInterface