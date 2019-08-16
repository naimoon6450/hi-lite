const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

const { annotRouter, bookRouter } = require('./api');
const db = require('./db_conn');

app.use(express.json);
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', annotRouter);
app.use('/api', bookRouter);

// send index.html
app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

app.use((error, req, res, next) => {
  res.status(404).send(error);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server connected on ${PORT}...`);
});
