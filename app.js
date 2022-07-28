const http = require('http');
const path = require('path');
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
app.use('/admin', adminRouters);
//  -/-
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
