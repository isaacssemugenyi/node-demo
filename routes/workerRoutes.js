const express = require('');

const router = express.Router();

// http://localhost:3000
router.get('/', (req, res) => {
  res.render('workers/createWorker');
});

// http://localhost:3000/edit
router.get('/edit', (req, res) => {
  res.render('workers/editWorker');
});

// POST -> action="/"
router.post('/', (req, res) => {
  // saving to db
  res.redirect('/');
});

module.exports = router;
