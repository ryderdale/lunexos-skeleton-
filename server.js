const express = require('express'); 
const app = express();

// const usersPath = path.join(__dirname, 'postgres://localhost/name_of_database');


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Handle incoming JSON objects and form data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
  }));
app.use(bodyParser.json());

const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.disable('x-powered-by');

// Uses the public folder as our station for static front-end files
app.use(express.static('static'));

const uuidv4= require('uuid/v4');

//application routes 
//const user = require('./routes/user');
//app.use('/user', user);


//state_routes

//const indexRouter = require('./routes/state_routes/index');
//app.use('/', indexRouter);

const port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log('Listening on port', port);
});  
     
module.exports = app;
