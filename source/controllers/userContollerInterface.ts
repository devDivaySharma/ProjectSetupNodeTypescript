import {Request , Response, NextFunction} from 'express';

interface UserControllerInterface {
     getUserContoller(req: Request, res: Response): any
     postUserContoller(req: Request, res: Response): any
     putUserContoller(req: Request, res: Response): any
     deleteUserContoller(req: Request, res: Response): any
}

export = UserControllerInterface