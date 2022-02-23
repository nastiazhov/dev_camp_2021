const UnauthorizedException = require('../middlewares/UnauthorizedException');
const NotFoundException = require('../middlewares/NotFoundException');

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
          if (error instanceof NotFoundException) 
            return res.status(404).send({ error: error.message });
          else if (error instanceof UnauthorizedException) 
            return res.status(401).send({ error: 'Unauthorized' });
            
          res.send('Oops... Something went wrong :(');
          next();
        });
    };
  }; 