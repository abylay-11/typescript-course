// списки
const arr1: any[] = []; // массив any
let arr2: string[] = ["a", "b", "c"]; // массив строк
const arr3 = [1, 2, 3, 4, 5];
const arr4: Array<number> = [];
const arr5: string[][] = [
  ["a", "b"],
  ["a", "b"],
  ["a", "b"],
];
const arr6: (string | number)[] = ["string", 123];
type MyTestType = string | number;

arr2.push("a");

// кортежи (tuple)

const tuple1: [string, boolean, number] = ["test", false, 123];

// Objects

type MyObj = {
  a: number;
  b: number;
  d: string;
};

interface MyInterface {
  a: string;
  b: string;
  d: number;
  [key: string]: string | number;
}

interface MyInterface2 {
  readonly a: string;
  b: string;
  d?: number;
  print(): number;
  print2?: () => string;
}

const obj: MyObj = {
  a: 1,
  b: 2,
  d: "123",
};

const obj2: MyInterface = {
  a: "string",
  b: "string",
  d: 123,
  'test': 123
};

const obj3: MyInterface2 = {
  a: "string",
  b: "string",
  print: function (): number {
    throw new Error("Function not implemented.");
  },
};

console.log(obj3.a);
// obj3.a = 123

interface Person {
    name: string
}

interface Person {
    age: number
}

const john: Person = {
    name: 'Jhon',
    age: 123
}

interface IAccount {
    login: string
}

const user: IAccount = {
    login: 'string'
}

interface IDeveloper extends IAccount {
    email: string;
    acrive: boolean;
}

const developer: IDeveloper = {
    email: "",
    acrive: false,
    login: ""
}