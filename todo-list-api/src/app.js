const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors())
const port = 8003

const server = app.listen(port, function(){
  console.log(`run on ${port}`)
});

app.get("/todoList", function(req, res, next){
  const data = [
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

  res.json(data);
});