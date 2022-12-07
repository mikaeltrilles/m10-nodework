const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'home.html'));
})
app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'about.html'));
})
app.get('/about-json', (req, res) => {
  res. json ({
    content: "About page content !"
  });
})
app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'contact.html'));
})
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
})

