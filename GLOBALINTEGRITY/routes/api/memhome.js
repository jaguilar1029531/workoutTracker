const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  // if its a get request do this
  .get(booksController.findById)
  // if its a put request do this
  .put(booksController.update)
  // if a delete request do this
  .delete(booksController.remove);

module.exports = router;

// api/books and the /:id above are the two URLS we can reach
