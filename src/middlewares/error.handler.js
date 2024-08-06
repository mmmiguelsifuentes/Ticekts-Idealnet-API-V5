module.exports = function errorHandler(err, req, res, next) {
    const errors = err.errors || { message: err.message };
    //errors.error = 'E02'
    errors.status = 500;
    res.status(err.status || 500).json({ errors });
  };