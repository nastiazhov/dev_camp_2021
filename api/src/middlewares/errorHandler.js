module.exports = (options) => {
    const { db, dbTableName } = options;
  
    return (error, req, res, next) => {
      db.insert({
        method: req.method,
        path: req.url,
        errorMessage: error.stack,
      })
        .into(dbTableName)
        .then(() => {
          res.send('Oops... Something went wrong :(');
          next();
        });
    };
  }; 