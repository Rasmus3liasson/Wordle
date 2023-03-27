const foodList =
  "Biff Korn Fisk Aprikos Fläskkött Fisk Dricka Tomat Ris Paj Päron".split(" ");

const colorList = "Rosa Gul Blå Grön Brun Svart Vit Orange Violett".split(" ");
const workList =
  "Gatsopare Skomakare Skådespelerska Idrottare Advokat Snickare Servitör Entreprenör Pilot Brandman".split(
    " "
  );

let wordsArr = [];
export function generateRandomWord(
  categoryArr,
  lengthOfWord,
  excludeDuplicatedLetters
) {
  let duplicatedLetter = [];
  let randomWordArr = [];

  // when user haven't specified a certin category
  //the list will contain all the words
  if (categoryArr == wordsArr) {
    wordsArr.push(...foodList, ...colorList, ...workList);
  }

  //function to remove words that have letters appear more then once
  //using .size to make function work since it only contains unique values
  function removeDuplicatedLetters() {
    for (let i = 0; i < categoryArr.length; i++) {
      duplicatedLetter = new Set(categoryArr[i].toLowerCase());
      if (duplicatedLetter.size != categoryArr[i].length) {
        categoryArr.splice(i, 1);
      }
    }
  }

  //if user have choosen to not include word with letter appearing more than once
  excludeDuplicatedLetters === true ? removeDuplicatedLetters() : null;

  //remove words that don't match the length of the word
  for (let i = 0; i < categoryArr.length; i++) {
    if (categoryArr[i].length <= lengthOfWord) {
      randomWordArr.push(categoryArr[i]);
    }
  }

  //variable tha contain the random word
  //based on the parameter from the user
  let randomWord =
    randomWordArr[Math.floor(Math.random() * randomWordArr.length)];

  //error message in no words match the specific
  randomWord === undefined
    ? (randomWord = "Inget ord fanns tillgängligt")
    : false;

  return randomWord;
}
