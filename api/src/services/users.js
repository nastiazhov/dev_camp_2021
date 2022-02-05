const db = require('../db');

module.exports = {
    getAllUsers: async () => db.select().from('Users').orderBy('UserId'),
    getUserById: async (id) => db.select().from('Users').where('UserId', id),
    getUserPosts: async (id) => db.select().from('Posts').where('UserId', id),
    getUserAvatar: async (id) => db.select('avatar').from('Users').where('UserId', id),
    uploadUserAvatar: async (id, filepath) => db.update('avatar', filepath).from('Users').where('UserId', id),
    createNewUser: async (body) => db.insert(body).into('Users'),
    updateUser: async (id, body) => db.select().from('Users').where('UserId', id).update(body),
    deleteUser: async (id) => db.select().from('Users').where('UserId', id).del(),
};