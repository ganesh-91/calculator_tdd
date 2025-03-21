function add(numbers) {
  if (numbers === "") return 0;
  let delimiter = /[,\n]/;
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterEndIndex);
    numbers = numbers.substring(delimiterEndIndex + 1);
  }

  return numbers.split(delimiter).reduce((sum, num) => sum + Number(num), 0);
}

module.exports = { add };
