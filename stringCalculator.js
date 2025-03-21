function add(numbers) {
  if (numbers === "") return 0;
  const [num1, num2] = numbers.split(",");
  return num2 ? parseInt(num1, 10) + parseInt(num2, 10) : parseInt(num1, 10);
}

module.exports = { add };
