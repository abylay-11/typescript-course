import { isTypeAliasDeclaration } from "typescript";

let str: string;
let x = false;

let score: number | string;

score = 123;
score = "123";

type Score = number | string | boolean;
const myScore1: Score = 12
const myScore2: Score = "12"
const myScore3: Score = false

const xss = 1

str = "abc";

console.log(str);
