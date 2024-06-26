const { Router } = require('express');

const router = Router();

// GET /api/users
router.get('/', (req, res) => {
    // get /api/users

    db.query('SELECT * FROM users', (err, results) => {
        res.json(results);
    });
});

router.get('/:id', (req, res) => {

});

router.post('/login', (req, res) => {
    
});

module.exports = router;