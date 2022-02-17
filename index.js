const express = require('express');
const cors = require('cors');
const {getTasks} = require('./src/tasks')
const PORT = process.env.PORT || 3000;

const app= express();
app.use(cors());
app.use(express.json())//tells express to use json parser

//routes
// app.post('/tasks', createTask);//posts
app.get('/tasks', getTasks);//get all tasks
// app.patch('/tasks/:taskId', updateTask );//marks tasks as done, only 1

app.listen(PORT, () => {
console.log('Listening on Port: ', PORT)
});