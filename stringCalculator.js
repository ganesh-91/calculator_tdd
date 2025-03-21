function add(numbers) {
  if (numbers === "") return 0;
  return numbers.split(/[,\n]/).reduce((sum, num) => sum + Number(num), 0);
}

module.exports = { add };
