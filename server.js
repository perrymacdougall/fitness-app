const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = 4000;
const config = require('./db');

mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Cannot connect to database' +err)
});

app.listen(PORT, function() {
    console.log('Server is running on port:', PORT);
});