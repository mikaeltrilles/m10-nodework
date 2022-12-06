const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("My first express app... Nothing special isn't it ?");
})
app.get('/about', (req, res) => {
  res.json({
    content: "About node in json format"
  })
})
app.get('/contact', (req, res) => {
  res.send("This is the contact page");
})
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
})

