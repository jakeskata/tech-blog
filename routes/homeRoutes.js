const router = require('express').Router();
const { postControllers } = require('../controllers');
const { getPosts } = postControllers;

router
    .route('/')
    .get(getPosts)

module.exports = router;