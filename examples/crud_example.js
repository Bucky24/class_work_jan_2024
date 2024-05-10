const router = require('express').Router();
const Book = require('../../models/Book');

/*
Create
Read
Update
Delete

POST /api/apartment - create new object
GET /api/apartment?page=3&size=50 - get all objects
GET /api/apartment/:id
PUT /api/apartment/:id
PATCH /api/apartment/:id
DELETE /api/apartment/:id

PATCH /api/apartment
{
  "address": "123 Main Street"
}

POST /api/user.update.profile
POST /api/user.update.profile.email
*/

// GET all books
router.get('/', (req, res) => {
  // Get all books from the book table
  Book.findAll().then((bookData) => {
    res.json(bookData);
  });
});

router.get('/:book_id', (req, res) => {
  Book.findByPk(req.params.book_id).then((bookData) => {
    res.json(bookData);
  });
});

// Updates book based on its book_id
router.put('/:book_id', (req, res) => {
  //Calls the update method on the Book model
  Book.update(
    req.body,
    {
      // Gets a book based on the book_id given in the request parameters
      where: {
        book_id: req.params.book_id,
      },
    }
  )
    .then((updatedBook) => {
      res.json(updatedBook);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Delete route for a book with a matching book_id
router.delete('/:book_id', (req, res) => {
  // Looks for the books based book_id given in the request parameters
  Book.destroy({
    where: {
      book_id: req.params.book_id,
    },
  })
    .then((deletedBook) => {
      res.json(deletedBook);
    })
    .catch((err) => res.json(err));
});

router.post('/', (req, res) => {
  Book.create(body).then((bookResult) => {
    res.json(bookResult);
  });
});

module.exports = router;
