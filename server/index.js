const express = require('express');
const app = express();
const { annotRouter, bookRouter } = require('./api');
const db = require('./db_conn');
let annotDb, bookDb;

app.use('/api', annotRouter);
app.use('/api', bookRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server connected on ${PORT}...`);
});
