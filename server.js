const express = require('express');
const connectDB = require('./db/db');
const morgan = require('morgan');
const bodyParser = require('body-parser')
var cors_proxy = require('cors-anywhere');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;

const phonebookRouter = require('./routes/phonebook');


connectDB();

app.use(express.json())
app.use(express.urlencoded());


app.use(morgan('tiny'));
app.use('/phoneBook', phonebookRouter);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}

app.listen(PORT, () => console.log('Server started'));