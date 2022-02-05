const router = require('express').Router();
const servicePosts = require('../services/posts');

module.exports = router;

router.get('/', async (req, res) => {
    try {
        res.status(200).json(await servicePosts.getAllPosts());
    } catch (err) {
        res.send(err);
    }
});

router.get('/:PostID/comments', async (req, res) => {
    try {
        const postsForAll = await db.select().from('Posts').where('available', 'forAll').orderBy('PostID');
        res.status(200).json(postsForAll);
        res.status(200).json(await servicePosts.getPostComments(req.params.id));
    } catch (err) {
        res.send(err);
    }
});

router.get('/:PostID', async (req, res) => {
    try {
        res.status(200).json(await servicePosts.getPostById(req.params.id));
    } catch (err) {
        res.send(err);
    }
});

router.post('/', async (req, res) => {
    try {
        await servicePosts.createNewPost(req.body);
        res.status(200).send('New post has been created');
    } catch (err) {
        res.send(err);
    }
});

router.put('/:PostID', async (req, res) => {
    try {
        await servicePosts.updatePostById(req.params.id, req.body);
        res.status(200).send('Post information was updated');
    } catch (err) {
        res.send(err);
    }
});

router.delete('/:PostID', async (req, res) => {
    try {
        await servicePosts.deletePostById(req.params.id);
        res.status(200).send('Post information was deleted');
    } catch (err) {
        res.send(err);
    }
});