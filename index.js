const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://localhost:27017/testdatabase", {});

const TestSchema = new mongoose.Schema({
  text: String,
});

const Entry = mongoose.model('Entry', TestSchema);

app.post('/', async (req, res) => {
  try {
    const entry = new Entry({ text: 'This is an entry by harkirat' });
    await entry.save();
    res.send('Entry added!');
  } catch (err) {
    res.status(500).send('Error occurred');
  }
});

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});

