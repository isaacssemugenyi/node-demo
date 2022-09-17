const express = require('');

const router = express.Router();

// Get all admins
// http://localhost:3000/admin
router.get('/', (req, res) => {
  res.render('adminList');
});

// serve create page a new admin
// http://localhost:3000/admin/new
router.get('/new', (req, res) => {
  res.render('/createAdmin');
});

// Create a new admin
// action="/admin/new"
router.post('/new', (req, res) => {
  // save to db
  res.redirect('/admin');
});

module.exports = router;
