function extractDelimiterAndNumbers(numbers) {
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    const delimiter = numbers.substring(2, delimiterEndIndex);
    numbers = numbers.substring(delimiterEndIndex + 1);
    return { delimiter, numbers };
  }
  return { delimiter: /[,\n]/, numbers };
}

function add(numbers) {
  if (numbers === "") return 0;

  const { delimiter, numbers: nums } = extractDelimiterAndNumbers(numbers);
  return nums.split(delimiter).reduce((sum, num) => sum + Number(num), 0);
}

module.exports = { add };
