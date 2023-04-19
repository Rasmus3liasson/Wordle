export default function generateRandomWord(
  categoryArr: string[],
  lengthOfWord: number,
  excludeDuplicatedLetters: boolean
) {
  let randomWordArr = [];

  //function to remove words that have letters appear more then once
  //using .size to make function work since it only contains unique values
  function removeDuplicatedLetters() {
    for (let i = 0; i < categoryArr.length; i++) {
      const duplicatedLetter = new Set(categoryArr[i].toLowerCase());
      if (duplicatedLetter.size != categoryArr[i].length) {
        categoryArr.splice(i, 1);
      }
    }
  }

  //if user have choosen to not include word with letter appearing more than once
  if (excludeDuplicatedLetters === true) {
    removeDuplicatedLetters();
  }

  //remove words that don't match the length of the word
  for (let i = 0; i < categoryArr.length; i++) {
    if (categoryArr[i].length == lengthOfWord) {
      randomWordArr.push(categoryArr[i]);
    }
  }

  //variable tha contain the random word
  //based on the parameter from the user
  let randomWord =
    randomWordArr[Math.floor(Math.random() * randomWordArr.length)];

  //error message in no words match the specific
  if (randomWord === undefined) {
    randomWord = "Inget ord fanns tillgängligt";
  }

  return randomWord;
}
