const express = require('express');

const router = express.Router();

const books = [
    {
        'title': 'blah',
        'id': 1,
    },
    {
        'title': 'bleh',
        'id': 2,
    },
];

router.get('/', (req, res) => {
  res.render('searchResults', {
    books,
  });
});

module.exports = router;