export function BoardStart(wordLength: number) {
  const boardStartArr: string[][] = [];
  for (let i = 0; i < wordLength; i++) {
    boardStartArr.push(["", "", "", "", ""]);
  }
  return boardStartArr;
}
