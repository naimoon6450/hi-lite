const express = require('express');
const app = express();
const sqlite = require('sqlite');
const db = require('./db_conn');
let annotDb, bookDb;

const annotationQuery =
  'select ZANNOTATIONREPRESENTATIVETEXT as BroaderText, ZANNOTATIONSELECTEDTEXT as SelectedText, ZANNOTATIONNOTE as Note, ZFUTUREPROOFING5 as Chapter, ZANNOTATIONCREATIONDATE as Created, ZANNOTATIONMODIFICATIONDATE as Modified, ZANNOTATIONASSETID FROM ZAEANNOTATION WHERE ZANNOTATIONSELECTEDTEXT IS NOT NULL';

const bookQuery =
  'SELECT ZASSETID, ZTITLE AS Title, ZAUTHOR AS Author FROM ZBKLIBRARYASSET WHERE ZTITLE IS NOT NULL';

app.get('/', (req, res, next) => {
  annotDb
    .all(annotationQuery)
    .then(data => {
      res.send(data);
    })
    .catch(next);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server connected on ${PORT}...`);
  db()
    .then(([annDb, bkDb]) => {
      // setting connection to the connected db connections
      annotDb = annDb;
      bookDb = bkDb;
    })
    .catch(e => {
      console.error(e);
    });
});
