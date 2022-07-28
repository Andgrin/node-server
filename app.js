const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRouters = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// add parsing all the data come in Req.body
app.use(bodyParser.urlencoded({
  extended: false
}));

// use adminRouters as middleware
app.use(adminRouters);
//  -/-
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);
