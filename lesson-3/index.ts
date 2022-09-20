// Functions typing

const func1 = (num: number): string => {
  return String(num);
};

type Callback = (num: number) => string;

function func2(cb?: Callback) {
  if (cb === undefined) {
    cb = String;
  }
  const text = cb(12);
  console.log(typeof text);
}

func2((num: number) => {
  const numString = String(num);
  return numString;
});

interface Printable {
  label: string;
}

function printReport(obj: Printable): void {
  console.log(obj.label);
}

const drink = {
  label: "pepsi",
  price: 90,
};

printReport(drink);
