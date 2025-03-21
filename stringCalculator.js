// this function can be more modularized.
function extractDelimiterAndNumbers(numbers) {
  if (!numbers.startsWith("//")) {
    return { delimiter: /[,\n]/, numbers };
  }
  const delimiterEndIndex = numbers.indexOf("\n");
  const delimiterSection = numbers.substring(2, delimiterEndIndex);

  if (delimiterSection.startsWith("[")) {
    const delimiters = delimiterSection.match(/\[(.*?)\]/g);
    if (delimiters) {
      const delimiterList = delimiters.map((d) => d.slice(1, -1));
      numbers = numbers.substring(delimiterEndIndex + 1);
      return { delimiter: new RegExp(`[${delimiterList.join("")}]`), numbers };
    }
  } else {
    const delimiter = delimiterSection;
    numbers = numbers.substring(delimiterEndIndex + 1);
    return { delimiter, numbers };
  }
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
