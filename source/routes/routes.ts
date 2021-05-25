import  express  from 'express';
import { UserController } from '../controllers/userContoller';
import { AuthContoller } from '../controllers/authContoller';
const router = express.Router();

router.post('/login',AuthContoller.prototype.getUserLoginContoller);
router.post('/register',AuthContoller.prototype.getUserRegisterContoller);
router.post('/google',AuthContoller.prototype.getGoogleLoginContoller);
router.post('/facebook',AuthContoller.prototype.getFacebookLoginContoller);
router.post('/email',AuthContoller.prototype.sendRegisterUserEmailContoller);
router.post('/emailotp',AuthContoller.prototype.sendRegisterUserOtpEmailContoller);
router.post('/phoneotp',AuthContoller.prototype.sendRegisterUserPhoneOtpContoller);


router.get('/user',UserController.prototype.getUserContoller);
router.put('/user',UserController.prototype.putUserContoller);
router.post('/user',UserController.prototype.postUserContoller);
router.delete('/user',UserController.prototype.deleteUserContoller);

export = router;