const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRouters = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// add parsing all the data come in Req.body
app.use(bodyParser.urlencoded({ extended: false }));
// share static files like CSS styles
app.use(express.static(path.join(__dirname, 'public')));

// use adminRouters as middleware
app.use('/admin', adminRouters);
//  -/-
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
