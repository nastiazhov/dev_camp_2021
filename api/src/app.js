const express = require('express');
const bodyParser = require('body-parser');

const config = require('./services/config');

const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const likesRoutes = require('./routes/likes');
const commentsRoutes = require('./routes/comments');

const app = express();
const port = config.appPort;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);
app.use('/likes', likesRoutes);
app.use('/comments', commentsRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});