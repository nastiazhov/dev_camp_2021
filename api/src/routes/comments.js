const router = require('express').Router();
const serviceComments = require('../services/comments');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');

module.exports = router;

router.get('/', asyncErrorHandler(async (req, res)=> {
    res.status(200).json(await serviceComments.getAllComments());
}));

router.get('/:CommentID', asyncErrorHandler(async (req, res) => {
    res.status(200).json(await serviceComments.getCommentById(req.params.id));
}));

router.post('/', asyncErrorHandler(async (req, res) => {
    await serviceComments.createNewComment(req.body);
    res.status(200).send('New comment has been created');
}));

router.put('/:CommentID', asyncErrorHandler(async (req, res) => {
    await serviceComments.updateCommentById(req.params.id, req.body);
    res.status(200).send('Comment was updated');
}));

router.delete('/:CommentID', asyncErrorHandler(async (req, res) => {
    await serviceComments.deleteCommentById(req.params.id);
    res.status(200).send('Comment was deleted');
}));