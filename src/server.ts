import * as Router from 'koa-router';
import { withAuth } from './middleware/auth.middleware';
import { IndexController } from './controllers/index.controller';

const router = new Router();

router.get('/public', IndexController.getPublic);
router.get('/protected', withAuth({ permission: "access-unkeyed-route" }), IndexController.getProtected); 

export default router;
