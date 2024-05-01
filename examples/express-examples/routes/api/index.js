const { Router } = require('express');

const router = Router();

const userRouter = require('./user');

router.use('/user', userRouter);

// POST /api/user/login

module.exports = router;