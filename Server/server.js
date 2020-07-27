const express = require('express');
const cors = require('cors');
const Missing = require('./missing.js');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())
const all = [];

let id = 0;


app.get('/', function (req, res) {
  res.send(all);
})

app.post('/', (req, res) => {
  all.push(new Missing(req.headers.message, id));
  id++;
  res.json(all);
})

app.patch('/', (req, res) => {
  elementToEdit = all.find((element => element.id == req.headers.id));
  index = all.indexOf(elementToEdit);
  all[index].completed = !all[index].completed;
  res.send(all[index]);
})

app.delete('/', (req, res) => {
  elementToEdit = all.find((element => element.id == req.headers.id));
  index = all.indexOf(elementToEdit);
  all.splice(index, 1);

  res.json(all);
})

app.listen(PORT, function () {
  console.log(`Listening on port: ${PORT}`)
})