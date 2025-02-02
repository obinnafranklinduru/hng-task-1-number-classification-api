const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: true,
    message: "Internal server error",
  });
};

module.exports = errorHandler;
