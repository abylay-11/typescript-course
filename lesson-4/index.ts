// Generics

interface ValueContainer<Value> {
  value: Value;
}

type StringContainer = ValueContainer<string>;

const x: StringContainer = {
  value: "string",
};

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(["1", "2", "3"]);
new ArrayOfAnything<number>([1, 2, 3, 4, 5]);
