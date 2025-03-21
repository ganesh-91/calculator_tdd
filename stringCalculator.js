function extractDelimiterAndNumbers(numbers) {
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const delimiter = numbers.substring(3, delimiterEndIndex - 1);
    numbers = numbers.substring(delimiterEndIndex + 1);
    return { delimiter, numbers };
  }
  return { delimiter: /[,\n]/, numbers };
}

function handleNegativeNumbers(numbers) {
  const negatives = numbers.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
  }
}

function add(numbers) {
  if (numbers === "") return 0;

  const { delimiter, numbers: numsString } =
    extractDelimiterAndNumbers(numbers);
  const nums = numsString.split(delimiter).map(Number);
  handleNegativeNumbers(nums);
  return nums
    .filter((num) => num <= 1000)
    .reduce((sum, num) => sum + Number(num), 0);
}

module.exports = { add };
