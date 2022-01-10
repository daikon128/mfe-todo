const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors())
const port = 8003

const server = app.listen(port, function(){
  console.log(`run on ${port}`)
});
const todoData = [
  {
    id: 1,
    title: "cleaning",
    description: "",
    schedule: {
      start: new Date(),
      end: new Date()
    }
  },
  {
    id: 2,
    title: "study",
    description: "",
    schedule: null
  },
  {
    id: 3,
    title: "shopping",
    description: "",
    schedule: null
  },
  {
    id: 4,
    title: "sleep",
    description: "",
    schedule: null
  }
]

app.get("/todoList", function(req, res, next){
  res.json(todoData);
});

app.get("/todoList/:id", function(req, res, next){
  console.log(req.params)
  const todo = todoData.find((todo) => todo.id == req.params.id)
  res.json(todo)
})