const express = require('express');
const app = express();

//app is a running express server. most projects will just use just one of these
// app is a configuration to listen to requests coming in from node and route it to different route handlers

app.get('/', (req, res) => {
  res.send({ bye: "stuff" });
});


const PORT = process.env.PORT || 5000; //dynamic port binding with heroku --> sets default to 5000
app.listen(PORT); 