exports.isPrime = (n) => {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

exports.isPerfect = (n) => {
  if (n <= 1) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      const otherDivisor = n / i;
      if (otherDivisor !== i) sum += otherDivisor;
    }
  }
  return sum === n;
};

exports.isArmstrong = (n) => {
  if (n < 0) return false;
  const digits = String(n).split("");
  const power = digits.length;
  const sum = digits.reduce(
    (acc, d) => acc + Math.pow(parseInt(d, 10), power),
    0
  );
  return sum === n;
};

exports.digitSum = (n) => {
  return String(Math.abs(n))
    .split("")
    .reduce((sum, d) => sum + parseInt(d, 10), 0);
};
