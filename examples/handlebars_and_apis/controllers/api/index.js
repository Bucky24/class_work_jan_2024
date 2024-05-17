const express = require('express');

const router = express.Router();

const libraryRoutes = require('./libraryRoute');

router.use('/library', libraryRoutes);

module.exports = router;