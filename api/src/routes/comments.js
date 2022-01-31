const router = require('express').Router();
const serviceComments = require('../services/comments');

module.exports = router;

router.get('/', async (req, res) => {
    try {
        res.status(200).json(await serviceComments.getAllComments());
    } catch (err) {
        res.send(err);
    }
});

router.get('/:CommentID', async (req, res) => {
    try {
        res.status(200).json(await serviceComments.getCommentById(req.params.id));
    } catch (err) {
        res.send(err);
    }
});

router.post('/', async (req, res) => {
    try {
        await serviceComments.createNewComment(req.body);
        res.status(200).send('New comment has been created');
    } catch (err) {
        res.send(err);
    }
});

router.put('/:CommentID', async (req, res) => {
    try {
        await serviceComments.updateCommentById(req.params.id, req.body);
        res.status(200).send('Comment was updated');
    } catch (err) {
        res.send(err);
    }
});

router.delete('/:CommentID', async (req, res) => {
    try {
        await serviceComments.deleteCommentById(req.params.id);
        res.status(200).send('Comment was deleted');
    } catch (err) {
        res.send(err);
    }
});