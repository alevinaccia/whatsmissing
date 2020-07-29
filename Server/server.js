const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('monk')(process.env.MONGO_URI);
const Missing = require('./missing.js');
const Code = require('./code.js')
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(express.json())
let all = db.get('missings');
let codes = db.get('codes');

app.get('/', function (req, res) {
  all.find({code : req.headers.code}).then(missings => res.send(missings));
})

app.post('/', (req, res) => {
  all.insert(new Missing(req.headers.message, req.headers.code)).then(() => {
    all = db.get('missings')
    all.find()
      .then(missings => res.json(missings));
  })
})

app.post('/code', (req, res) => {
  codes.insert(new Code(req.headers.code)).then(codes.find().then((docs) => {
    res.json(docs);
  }))
})

app.patch('/', (req, res) => {
  req.headers.current == 'true' ? (bool = true) : (bool = false)
  all.findOneAndUpdate({ _id: req.headers._id }, { $set: { completed: !bool } }).then(all.find())
    .then(missing => res.json(missing));
})

app.delete('/', (req, res) => {
  all.findOneAndDelete({ _id: req.headers._id }).then(() => {
    all = db.get('missings');
    all.find()
      .then(missings => res.json(missings));
  })

})

app.listen(PORT, function () {
  console.log(`Listening on port: ${PORT}`)
})