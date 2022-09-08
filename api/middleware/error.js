module.exports = (err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something failed internally";
  res.status(errorStatus).send({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
};
