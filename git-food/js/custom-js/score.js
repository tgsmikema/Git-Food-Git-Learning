let score = 0;

const updateScore = () => {
  const scoreLabel = $("#score-label");
  score = score + 10;
  scoreLabel.html("Score: " + score);
  scoreLabel.effect("shake")
};
