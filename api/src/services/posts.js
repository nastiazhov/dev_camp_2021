const db = require('../db');

module.exports = {
    getAllPosts: async () => db.select().from('Posts').orderBy('PostId'),
    getPostComments: async (id) => db.select().from('Comments').where('PostId', id),
    getPostById: async (id) => db.select().first().from('Posts').where('PostId', id),
    getPostImage: async (id) => db.select('image').first().from('Posts').where('PostId', id),
    createNewPost: async (body) => db.insert(body).into('Posts'),
    updatePostById: async (id, body) => db.select().from('Posts').where('PostId', id).update(body),
    deletePostById: async (id) => db.select().from('Posts').where('PostId', id).del(),
};