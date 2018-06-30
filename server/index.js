const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authroutes')(app);

const PORT = process.env.PORT || 5000;
//dynamic port binding with heroku --> sets default to 5000
app.listen(PORT);