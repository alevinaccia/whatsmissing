const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())
const all =
  [
    {
      "id" : 1,
      "message": "Milk"
    },
    {
      "id" : 2,
      "message": "Candys"
    },
    {
      "id" : 3,
      "message": "Burritos"
    }
  ];


app.get('/', function (req, res) {
  res.send(all);
})

app.post('/addElement', (req, res) => {
  all.push(req.body);
  res.send(all);
})

app.listen(PORT, function () {
  console.log(`Listening on port: ${PORT}`)
})