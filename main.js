async function getData() {
  // Fetch the text input.
  const response = await fetch("input.txt");
  let data = await response.text();
  // Turn the text input into an array of strings.
  data = data.split(/\r?\n/);
  return data;
}

function getCalibrationSum(data) {
  // Filter out non numbers.
  return data.reduce((acc, string) => {
    const numbers = string.match(/\d/g);

    if (numbers) {
      const result = numbers[0] + numbers[numbers.length - 1];
      return acc + Number(result);
    } else {
      return acc;
    }
  }, 0);
}

function displayAnswer(answer) {
  const answerElement = document.querySelector("#answer");
  answerElement.innerText = answer;
}

const data = await getData();
const sum = getCalibrationSum(data);
displayAnswer(sum);
