const axios = require("axios");
const { NUMBER_API_BASE_URL } = require("../config/constants");
const {
  isPrime,
  isPerfect,
  isArmstrong,
  digitSum,
} = require("../utils/mathHelpers");

class NumberService {
  async classifyNumber(number) {
    const [prime, perfect, armstrong, sum] = await Promise.all([
      isPrime(number),
      isPerfect(number),
      isArmstrong(number),
      digitSum(number),
    ]);

    const parity = number % 2 === 0 ? "even" : "odd";
    const properties = armstrong ? ["armstrong", parity] : [parity];

    let fun_fact;
    try {
      const response = await axios.get(`${NUMBER_API_BASE_URL}/${number}/math`);
      fun_fact = response.data;
    } catch (error) {
      fun_fact = "No fun fact available.";
    }

    return {
      number,
      is_prime: prime,
      is_perfect: perfect,
      properties,
      digit_sum: sum,
      fun_fact,
    };
  }
}

module.exports = new NumberService();
