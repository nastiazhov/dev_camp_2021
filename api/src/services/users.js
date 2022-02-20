const db = require('../db');
const passwordHasher = require('../passwordHasher');
const config = require('../config');

module.exports = {
    getAllUsers: async () => db.select().from('Users').orderBy('UserId'),
    getUserById: async (id) => db.select().first().from('Users').where('UserId', id),
    getUserPosts: async (id) => db.select().from('Posts').where('UserId', id),
    getUserAvatar: async (id) => db.select('avatar').from('Users').where('UserId', id),
    uploadUserAvatar: async (id, filepath) => db.update('avatar', filepath).from('Users').where('UserId', id),
    createNewUser: async (body) => {
        if (body.password) body.password = passwordHasher(body.password, config.salt);
        return db.insert(body).into('Users');
      },
    checkPassword: (plainPassword, hash) => hash === passwordHasher(plainPassword, config.salt),
    updateUser: async (id, body) => db.select().from('Users').where('UserId', id).update(body),
    deleteUser: async (id) => db.select().from('Users').where('UserId', id).del(),
};