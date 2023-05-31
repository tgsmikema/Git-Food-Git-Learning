let incorrectCounter = 0;
const maxIncorrect = 1;

const increaseIncorrectCounter = () => {
  incorrectCounter++;
};

const resetIncorrectCounter = () => {
  incorrectCounter = 0;
};

const shouldRestart = () => {
  console.log(incorrectCounter);
  console.log(maxIncorrect);
  return incorrectCounter >= maxIncorrect;
};
