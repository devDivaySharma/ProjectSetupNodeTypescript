import {Request,Response} from 'express';
import AuthService from '../services/authService';
import AuthContollerInterface from './authContollerInterface';

export class AuthContoller implements AuthContollerInterface{
    getUserLoginContoller(req:Request,res: Response): any{
        AuthService.prototype.getUserLoginService(req,res);   
    }

    getGoogleLoginContoller(req:Request,res: Response): any{
        AuthService.prototype.getGoogleLoginService(req,res);
    }
    
    getFacebookLoginContoller(req:Request,res: Response): any{
        AuthService.prototype.getFacebookLoginService(req,res);
    }

    getUserRegisterContoller(req:Request,res: Response):any{
        AuthService.prototype.getUserRegisterService(req,res);
    }

    sendRegisterUserEmailContoller(req:Request,res: Response):any{
        AuthService.prototype.sendRegisterUserEmailService(req,res);
    }

    sendRegisterUserOtpEmailContoller(req:Request,res: Response): any{
        AuthService.prototype.sendRegisterUserOtpEmailService(req,res);
    }

    sendRegisterUserPhoneOtpContoller(req:Request,res: Response):any{   
        AuthService.prototype.sendRegisterUserPhoneOtpService(req,res)
    }   
}
