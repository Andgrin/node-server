const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminRouters = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// add parsing all the data come in Req.body
app.use(bodyParser.urlencoded({
  extended: false
}));
// share static files like CSS styles
app.use(express.static(path.join(__dirname, 'public')));

// use adminRouters as middleware
app.use('/admin', adminRouters.router);
//  -/-
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
// module.exports = path.dirname(require.main.filename);

app.listen(3000);
