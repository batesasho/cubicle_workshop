const express = require('express');
const handlebars = require('express-handlebars');
const routes = require('./routes.js');
const app = express();


app.use("/static", express.static('public'));
app.use(express.urlencoded({extended: false}));
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.use(routes);


app.listen(5000, () => console.log('Server is listening on port 5000...'));