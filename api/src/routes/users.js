const router = require('express').Router();
const serviceUsers = require('../services/users');
const upload = require('../services/multer');
const path = require('path');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
const authMiddleware = require('../middlewares/authMiddleware');

module.exports = router;

router.get('/', asyncErrorHandler(async (req, res) => {
    res.status(200).json(await serviceUsers.getAllUsers());
}));

router.get('/:UserID', asyncErrorHandler(async (req, res) => {
    res.status(200).json(await serviceUsers.getUserById(req.params.id));
}));

router.get('/:UserID/posts', asyncErrorHandler(async (req, res) => {
    res.status(200).json(await serviceUsers.getUserPosts(req.params.id));
}));

router.post('/', authMiddleware, asyncErrorHandler(async (req, res) => {
    await serviceUsers.createNewUser(req.body);
    res.status(200).send('New user has been created');
}));

router.put('/:UserID', asyncErrorHandler(async (req, res) => {
    await serviceUsers.updateUser(req.params.id, req.body);
    res.status(200).send('User information was updated');
}));

router.delete('/:UserID', asyncErrorHandler(async (req, res) => {
    await serviceUsers.deleteUser(req.params.id);
    res.status(200).send('User was successfully deleted');
}));

router.get('/:UserID/avatar', asyncErrorHandler(async (req, res) => {
    const userAvatar = await serviceUsers.getUserAvatar(req.params.id);
    res.status(200).sendFile(`${userAvatar[0].avatar}`, {root: path.dirname('')});
}));

router.post('/:UserID/avatar', upload.single('avatar'), asyncErrorHandler(async (req, res) => {
    if (req.file) {
        await serviceUsers.uploadUserAvatar(req.params.id, req.file.path);
        res.status(200).send('Avatar was successfully uploaded');
    }
    else {
        res.send('File cannot be loaded');
    }
}));