const router = require('express').Router();
const servicePosts = require('../services/posts');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');

module.exports = router;

router.get('/', asyncErrorHandler(async (req, res) => {
    res.status(200).json(await servicePosts.getAllPosts());
}));

router.get('/:PostID/comments', asyncErrorHandler(async (req, res) => {
    const postsForAll = await db.select().from('Posts').where('available', 'forAll').orderBy('PostID');
    res.status(200).json(postsForAll);
    res.status(200).json(await servicePosts.getPostComments(req.params.id));
}));

router.get('/:PostID', asyncErrorHandler(async (req, res) => {
    res.status(200).json(await servicePosts.getPostById(req.params.id));
}));

router.post('/', asyncErrorHandler(async (req, res) => {
    await servicePosts.createNewPost(req.body);
    res.status(200).send('New post has been created');
}));

router.put('/:PostID', asyncErrorHandler(async (req, res) => {
    await servicePosts.updatePostById(req.params.id, req.body);
    res.status(200).send('Post information was updated');
}));

router.delete('/:PostID', asyncErrorHandler(async (req, res) => {
    await servicePosts.deletePostById(req.params.id);
    res.status(200).send('Post information was deleted');
}));