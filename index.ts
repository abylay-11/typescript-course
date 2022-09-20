import axios from "axios"

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'
axios.get(url).then(res => {
    const todo = res.data as Todo

    console.log(todo.id, todo.title, todo.completed, todo.userId)

    logTodo(todo)
})

function logTodo(todo: Todo) {
    console.log(todo)
}