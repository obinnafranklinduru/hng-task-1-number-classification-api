const validateNumberParam = (req, res, next) => {
  const numberParam = req.query.number;

  if (numberParam === undefined || !/^-?\d+$/.test(numberParam)) {
    return res.status(400).json({
      number: numberParam || undefined,
      error: true,
    });
  }

  req.validatedNumber = numberParam;
  next();
};

module.exports = {
  validateNumberParam,
};
