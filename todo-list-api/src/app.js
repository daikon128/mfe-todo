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
      title: "cleaning",
      description: "",
      schedule: {
        start: new Date(),
        end: new Date()
      }
    },
    {
      title: "study",
      description: "",
      schedule: null
    },
    {
      title: "shopping",
      description: "",
      schedule: null
    },
    {
      title: "sleep",
      description: "",
      schedule: null
    }
  ]

  res.json(data);
});