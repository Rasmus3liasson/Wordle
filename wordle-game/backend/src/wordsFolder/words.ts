import letters5 from "./letters5.ts";
import letters6 from "./letters6.ts";
import letters7 from "./letters7.ts";

const words5Letters = letters5.words.join(" ");
const words6Letters = letters6.words.join(" ");
const words7Letters = letters7.words.join(" ");

export const wordList = words5Letters + words6Letters + words7Letters;
