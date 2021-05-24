import  express  from 'express';
import { userGetContoller,userPostContoller,userDeleteContoller,userPutContoller } from '../controllers/userContoller'
const router = express.Router();

router.get('/user',userGetContoller);
router.put('/user',userPutContoller);
router.post('/user',userPostContoller);
router.delete('/user',userDeleteContoller);

export = router;