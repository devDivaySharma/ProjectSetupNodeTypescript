import { Request , Response } from 'express';
import AuthServiceInterface from './authServiceInterface';

const namespace = 'AUTHORIZATION'

class AuthService implements AuthServiceInterface{
    getUserLoginService(req:Request,res: Response): any{

    }
    getGoogleLoginService(req:Request,res: Response): any{

    }
    getFacebookLoginService(req:Request,res: Response): any{

    }
    getUserRegisterService(req:Request,res: Response):any{

    }
    sendRegisterUserEmailService(req:Request,res: Response):any{

    }
    sendRegisterUserOtpEmailService(req:Request,res: Response): any{

    }
    sendRegisterUserPhoneOtpService(req:Request,res: Response):any{

    }
}

export = AuthService