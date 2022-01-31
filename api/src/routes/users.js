const router = require('express').Router();
const serviceUsers = require('../services/users');
const upload = require('../services/multer');
const path = require('path');

module.exports = router;

router.get('/', async (req, res) => {
    try {
        res.status(200).json(await serviceUsers.getAllUsers());
    } catch (err) {
        res.send(err);
    }
});

router.get('/:UserID', async (req, res) => {
    try {
        res.status(200).json(await serviceUsers.getUserById(req.params.id));
    } catch (err) {
        res.send(err);
    }
});

router.get('/:UserID/posts', async (req, res) => {
    try {
        res.status(200).json(await serviceUsers.getUserPosts(req.params.id));
    } catch (err) {
        res.send(err);
    }
});

router.post('/', async (req, res) => {
    try {
        await serviceUsers.createNewUser(req.body);
        res.status(200).send('New user has been created');
    } catch (err) {
        res.send(err);
    }
});

router.put('/:UserID', async (req, res) => {
    try {
        await serviceUsers.updateUser(req.params.id, req.body);
        res.status(200).send('User information was updated');
    } catch (err) {
        res.send(err);
    }
});

router.delete('/:UserID', async (req, res) => {
    try {
        await serviceUsers.deleteUser(req.params.id);
        res.status(200).send('User was successfully deleted');
    } catch (err) {
        res.send(err);
    }
});

router.get('/:UserID/posts', async (req, res) => {
    try {
        const reqUserID = req.params.UserID;
        const user = await db.select().from('Posts').where('UserID', reqUserID);
        const userAvatar = await serviceUsers.getUserAvatar(req.params.id);

        res.status(200).json(user);
        res.status(200).sendFile(`${userAvatar[0].avatar}`, {root: path.dirname('')});
    } catch (err) {
        res.send('File not found');
    }
});

router.post('/:UserID/avatar', upload.single('avatar'), async (req, res) => {
    try {
        if (req.file) {
            await serviceUsers.uploadUserAvatar(req.params.id, req.file.path);
            res.status(200).send('Avatar was successfully uploaded');
        }
        else {
            res.send('File cannot be loaded');
        }
    } catch (err) {
        res.send(err);
    }
});