function shuffleArray(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

function getStacksAndScores(array) {
  let stack1 = [];
  let score1 = 0;
  let stack2 = [];
  let score2 = 0;
  
  for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        stack1.push(array[i]);
        score1 += array[i].base_experience;
      }  
      else {
        stack2.push(array[i]);
        score2 += array[i].base_experience;
      }  
  }

  return { stack1, stack2, score1, score2 };
}

function getWinner(score1, score2) {
  let isWinner1 = false;
  let isWinner2 = false;
  let isTie = "";

  if (score1 > score2)
    isWinner1 = true;
  else if (score2 > score1)
    isWinner2 = true;
  else
    isTie = "IT'S A TIE!";

  return { isWinner1, isWinner2, isTie }  
}

export { shuffleArray, getStacksAndScores, getWinner }


  
  