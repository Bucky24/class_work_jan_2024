const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
    console.log(req.body);
    res.json({
        message: 'saved data'
    }); 
});

module.exports = router;