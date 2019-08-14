const sqlite = require('sqlite');

const dbInstances = [
  sqlite.open('../../AEAnnotation/AEAnnotation_v10312011_1727_local.sqlite'),
  sqlite.open('../../BKSeriesDatabase/BKLibrary-1-091020131601.sqlite')
];

const db_conn = () => {
  return Promise.all(dbInstances)
    .then(result => {
      return result;
    })
    .catch(e => {
      console.error(e);
    });
};

module.exports = db_conn;
