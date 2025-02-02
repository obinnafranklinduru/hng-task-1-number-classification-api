const numberService = require("../services/number.service");

const classifyNumber = async (req, res, next) => {
  try {
    const number = parseInt(req.validatedNumber, 10);
    const result = await numberService.classifyNumber(number);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  classifyNumber,
};
