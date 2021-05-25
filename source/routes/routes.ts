import  express  from 'express';
import { UserController } from '../controllers/userContoller'
const router = express.Router();

router.get('/user',UserController.prototype.getUserContoller);
router.put('/user',UserController.prototype.putUserContoller);
router.post('/user',UserController.prototype.postUserContoller);
router.delete('/user',UserController.prototype.deleteUserContoller);

export = router;