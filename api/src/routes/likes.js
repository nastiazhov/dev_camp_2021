const router = require('express').Router();
const serviceLikes = require('../services/likes');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');

module.exports = router;

router.get('/', asyncErrorHandler(async (req, res) => {
    res.status(200).json(await serviceLikes.getAllLikes());
}));

router.get('/:UserID/:PostID', asyncErrorHandler(async (req, res) => {
    res.status(200).json(await serviceLikes.getLikesByUserIdPostId(req.params.userId, req.params.postId));
}));

router.post('/', asyncErrorHandler(async (req, res) => {
    await serviceLikes.createNewLike(req.body);
    res.status(200).send('New like has been created');
}));

router.put('/:UserID/:PostID', asyncErrorHandler(async (req, res) => {
    await serviceLikes.updateLikeUserIdPostId(req.params.userId, req.params.postId, req.body);
    res.status(200).send('Like was updated');
}));

router.delete('/:UserID/:PostID', asyncErrorHandler(async (req, res) => {
    await serviceLikes.deleteLikeUserIdPostId(req.params.userId, req.params.postId);
    res.status(200).send('Like was deleted');
}));