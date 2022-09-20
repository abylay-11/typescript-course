// списки
var arr1 = []; // массив any
var arr2 = ["a", "b", "c"]; // массив строк
var arr3 = [1, 2, 3, 4, 5];
var arr4 = [];
var arr5 = [
    ["a", "b"],
    ["a", "b"],
    ["a", "b"],
];
var arr6 = ["string", 123];
arr2.push("a");
// кортежи (tuple)
var tuple1 = ["test", false, 123];
var obj = {
    a: 1,
    b: 2,
    d: "123"
};
var obj2 = {
    a: "string",
    b: "string",
    d: 123,
    'test': 123
};
var obj3 = {
    a: "string",
    b: "string",
    print: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(obj3.a);
var john = {
    name: 'Jhon',
    age: 123
};
var user = {
    login: 'string'
};
var developer = {
    email: "",
    acrive: false,
    login: ""
};
