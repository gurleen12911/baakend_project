const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);

app.use(cookieParser('CookingBlogSecure'));
app.use(session({
  secret: 'CookingBlogSecretSession',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());
app.use(fileUpload());

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const recipeRoutes = require('./server/routes/recipeRoutes.js');
const contactRoutes = require('./server/routes/contactRoutes.js'); // Add this line
const aboutRoutes = require('./server/routes/aboutRoutes.js'); // Add this line

app.use('/', recipeRoutes);
app.use('/contact', contactRoutes); // Add this line
app.use('/about', aboutRoutes); // Add this line

app.listen(port, () => console.log(`Listening to port ${port}`));
