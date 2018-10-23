const router = require('koa-router')();
const controller = require('../controller/c-signup.js')

router.get('/signup',controller.postSignup);
router.get('/getUser',controller.getUser);

module.exports=router;