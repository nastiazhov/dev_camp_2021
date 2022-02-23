const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./services/config');

const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const likesRoutes = require('./routes/likes');
const commentsRoutes = require('./routes/comments');
const authRoutes = require('./routes/auth');

const app = express();
const port = config.appPort;

const getGoogleStrategy = require('./services/google');
const { registerStrategy, passport } = getGoogleStrategy();
const db = require('./services/db');
const logIn = require('./middlewares/logIn');
const errorHandler = require('./middlewares/errorHandler');
registerStrategy();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', usersRoutes);
app.use('/posts', postsRoutes);
app.use('/likes', likesRoutes);
app.use('/comments', commentsRoutes);
app.use('/auth', authRoutes);

app.use(logIn({
  db: db,
  dbTableName: config.logsDbTableName,
}));
app.use(passport.initialize());

app.use(errorHandler({
  db: db,
  dbTableName: config.logsDbTableName,
}));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});