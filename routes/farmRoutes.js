const express = require('');

const router = express.Router();

// Get all farms
// http://localhost:3000/farm
router.get('/', (req, res) => {
  res.render('farmList');
});

// serve create page a new farm
// http://localhost:3000/farm/create
router.get('/create', (req, res) => {
  res.render('/createFarm');
});

// Create a new farm
// action="/farm/create"
router.post('/create', (req, res) => {
  // save to db
  res.redirect('/farm/create');
});

module.exports = router;
