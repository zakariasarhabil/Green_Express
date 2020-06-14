const express = require('express');
const BlogController = require('./../controllers/BlogController');

const router = express.Router();

//router.get('/create', BlogController.createBlog);
router.get('', BlogController.getAllBlogs);
router.post('', BlogController.storeBlog);
router.put('/:id', BlogController.updateBlog);
//router.get('/:id/edit', BlogController.editBlog)
router.get('/:id', BlogController.showOneBlog)
router.patch('/:id', BlogController.patchBlog)
router.delete('/:id', BlogController.deleteBlog)

module.exports = router;