import { checkGuess } from "../functions/checkGuess";
import { describe, expect, test } from "@jest/globals";

/* This is a unit-test to test the function that should handle the word that user
 have guessed to be in the correct word
 Since our function hasen't been implemented with another component at this moment,
 a unit-test is the way I can test that the function works as it should
 
 Below are test that i believe should cover all possible outcome depending of what
 the word from the user is.
 */

describe("checkGuess(wordFromUser, randomWord)", () => {
  test("should return correct, misplaced, and incorrect with the word given by the user", () => {
    const wordFromUser = "SLOER";
    const correctWord = "SOLEN";

    const result = checkGuess(wordFromUser, correctWord);
    expect(result).toEqual([
       "correct" ,
       "misplaced" ,
       "misplaced" ,
       "correct" ,
       "incorrect" ,
    ]);
  });
   test("should return correct, misplaced, and incorrect, test with example from exercise", () => {
    const wordFromUser = "HALLÅ";
    const correctWord = "CYKLA";

    const result = checkGuess(wordFromUser, correctWord);
    expect(result).toEqual([
       "incorrect" ,
       "misplaced" ,
       "incorrect" ,
       "correct" ,
       "incorrect" ,
    ]);
  });

  test("should show 'incorrect' if the guessedWord has letters and one of them is correct and the other doesn't exist", () => {
    const wordFromUser = "SOLLN";
    const correctWord = "SOLEN";

    const result = checkGuess(wordFromUser, correctWord);

    expect(result).toEqual([
       "correct" ,
       "correct" ,
       "correct" ,
       "incorrect" ,
       "correct" ,
    ]);
  });

  

  test("should handle letter to 'incorrect' if no match found", () => {
    const wordFromUser = "MAJS";
    const correctWord = "KATT";

    const result = checkGuess(wordFromUser, correctWord);

    expect(result).toEqual([
       "incorrect" ,
       "correct" ,
       "incorrect" ,
       "incorrect" ,
    ]);
  });
  test("keys should have correct if both words match", () => {
    const wordFromUser = "PIZZA";
    const correctWord = "PIZZA";

    const result = checkGuess(wordFromUser, correctWord);

    expect(result).toEqual([
       "correct" ,
       "correct" ,
       "correct" ,
       "correct" ,
      "correct" ,
    ]);
  });
 
  test("should not execute function when the string length don't match", () => {
    const wordFromUser = "KALAS";
    const correctWord = "KALLAS";

    const result = checkGuess(wordFromUser, correctWord);

    expect(result).toBeFalsy();
  }); 
});