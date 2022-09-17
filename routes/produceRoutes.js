const express = require('');

const router = express.Router();

// Get all produces
// http://localhost:3000/produce
router.get('/', (req, res) => {
  res.render('produce/produceList');
});

// serve create page a new produce
// http://localhost:3000/produce/new
router.get('/new', (req, res) => {
  res.render('produce/createProduce');
});

// Create a new produce
// action="/produce/create"
router.post('/create', (req, res) => {
  // save to db
  res.redirect('/produce/new');
});

module.exports = router;
