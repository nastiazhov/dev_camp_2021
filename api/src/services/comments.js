const db = require('../db');

module.exports = {
    getAllComments: async () => db.select().from('Comments').orderBy('CommentId'),
    getCommentById: async (id) => db.select().from('Comments').where('CommentId', id),
    createNewComment: async (body) => db.insert(body).into('Comments'),
    updateCommentById: async (id, body) => db.select().from('Comments').where('CommentId', id).update(body),
    deleteCommentById: async (id) => db.select().from('Comments').where('CommentId', id).del(),
};