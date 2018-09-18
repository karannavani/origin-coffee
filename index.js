const express             = require('express');
const bodyParser          = require('body-parser');
const morgan              = require('morgan');
const errorHandler        = require('./lib/errorHandler');
const Router              = require('./config/routes');
const app                 = express();
const { dbUri, port }     = require('./config/environment');
const mongoose            = require('mongoose');
mongoose.Promise          = require('bluebird');

mongoose.connect(dbUri);

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(`${__dirname}/public`));

app.use('/api', Router);

app.use(errorHandler);

app.listen(port, console.log(`Express is listening on ${port}`));
