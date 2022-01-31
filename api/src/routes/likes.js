const router = require('express').Router();
const serviceLikes = require('../services/likes');

module.exports = router;

router.get('/', async (req, res) => {
    try {
        res.status(200).json(await serviceLikes.getAllLikes());
    } catch (err) {
        res.send(err);
    }
});

router.get('/:UserID/:PostID', async (req, res) => {
    try {
        res.status(200).json(await serviceLikes.getLikesByUserIdPostId(req.params.userId, req.params.postId));
    } catch (err) {
        res.send(err);
    }
});

router.post('/', async (req, res) => {
    try {
        await serviceLikes.createNewLike(req.body);
        res.status(200).send('New like has been created');
    } catch (err) {
        res.send(err);
    }
});

router.put('/:UserID/:PostID', async (req, res) => {
    try {
        await serviceLikes.updateLikeUserIdPostId(req.params.userId, req.params.postId, req.body);
        res.status(200).send('Like was updated');
    } catch (err) {
        res.send(err);
    }
});

router.delete('/:UserID/:PostID', async (req, res) => {
    try {
        await serviceLikes.deleteLikeUserIdPostId(req.params.userId, req.params.postId);
        res.status(200).send('Like was deleted');
    } catch (err) {
        res.send(err);
    }
});