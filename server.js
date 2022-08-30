const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const info = require('./portfolio.json');

console.log(info);
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.get('/*', (req, res) => {
    res.send(info);
});
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });