import { generateRandomWord } from "../server/functions/generateRandomWord.js";
import { describe, expect, test } from "@jest/globals";

/* This is a unit-test to test the function that should return a a random word from a
list of word
 Since our function hasen't been implemented with another component at this moment,
 a unit-test is the way I can test that the function works as it should
 
 Below are test that i believe should cover all possible outcome, depending on what
 the user specify the word to include.
 User are given the choice to choose beetween category,length and if word should 
 have letters appear more than once
 */

describe("algorithmB(category, lengthOfWord, excludeDuplicatedLetters)", () => {
  const wordsArray = ["Rasmus", "tomater", "hejan", "martin", "kola", "sallad"];

  test("should return random word from array", () => {
    const result = generateRandomWord(wordsArray, 5, false);
    expect(wordsArray).toContain(result);
  });

  test("should use 'lengtOfWord' as parameter for determine length of the random word", () => {
    const result = generateRandomWord(wordsArray, 5, false);
    expect(result).toEqual("hejan");
    expect(result).not.toEqual("kola");
  });

  test("should use parameter 'excludeDuplicatedLetters' to exclude letters that contain letters more than once", () => {
    const result = generateRandomWord(wordsArray, 6, true);
    expect(result).not.toEqual("sallad");
  });
  test("should return a error message if no words are found", () => {
    const result = generateRandomWord(wordsArray, 1, true);
    expect(result).toEqual("Inget ord fanns tillgängligt");
  });
});
