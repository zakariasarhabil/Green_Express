const express = require('express');
const CommentController = require('./../controllers/CommentController');

const router = express.Router();

//router.get('/create', CommentController.createComment);
router.get('', CommentController.getAllComments);
router.post('', CommentController.storeComment);
router.put('/:id', CommentController.updateComment);
//router.get('/:id/edit', CommentController.editComment)
router.get('/:id', CommentController.showOneComment)
router.patch('/:id', CommentController.patchComment)
router.delete('/:id', CommentController.deleteComment)

module.exports = router;