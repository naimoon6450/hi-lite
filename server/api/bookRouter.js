const bookRouter = require('express').Router();
const db = require('../db_conn');

const bookQuery =
  'SELECT ZASSETID, ZTITLE AS Title, ZAUTHOR AS Author FROM ZBKLIBRARYASSET WHERE ZTITLE IS NOT NULL';

bookRouter.get('/books', (req, res, next) => {
  db().then(([annotDb, bookDb]) => {
    bookDb
      .all(bookQuery)
      .then(data => {
        res.json(data);
      })
      .catch(next);
  });
});

module.exports = bookRouter;
