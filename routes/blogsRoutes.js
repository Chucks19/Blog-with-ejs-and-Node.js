const express = require('express');
const blogscontroller = require('../controllers/blogscontroller');
const router = express.Router();

router.get('/blogs', blogscontroller.Home);
router.post('/blogs', blogscontroller.Home_post);
router.get('/create', blogscontroller.Create);
router.delete('/blogs/:id', blogscontroller.Delete);
router.get('/blogs/:id', blogscontroller.Detail);

module.exports = router;