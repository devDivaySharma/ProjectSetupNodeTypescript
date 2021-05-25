import {Request,Response} from 'express';

interface AuthContollerInterface {
    getUserLoginContoller(req:Request,res: Response): any;
    getGoogleLoginContoller(req:Request,res: Response): any;
    getFacebookLoginContoller(req:Request,res: Response): any;
    getUserRegisterContoller(req:Request,res: Response):any;
    sendRegisterUserEmailContoller(req:Request,res: Response):any;
    sendRegisterUserOtpEmailContoller(req:Request,res: Response): any;
    sendRegisterUserPhoneOtpContoller(req:Request,res: Response):any;
}

export = AuthContollerInterface