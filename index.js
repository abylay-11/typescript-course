"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (res) {
    var todo = res.data;
    console.log(todo.id, todo.title, todo.completed, todo.userId);
    logTodo(todo);
});
function logTodo(todo) {
    console.log(todo);
}
