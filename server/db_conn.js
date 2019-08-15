const sqlite = require('sqlite');

const macPathAnnotation =
  '/Users/admin/Library/Containers/com.apple.iBooksX/Data/Documents/AEAnnotation/AEAnnotation_v10312011_1727_local.sqlite';
const macPathBooks =
  '/Users/admin/Library/Containers/com.apple.iBooksX/Data/Documents/BKSeriesDatabase/BKSeries-1-012820141020.sqlite';
// stored locally in Windows
// const winPathAnnotation =
//   '../../AEAnnotation/AEAnnotation_v10312011_1727_local.sqlite';
// const winPathBooks = './../BKSeriesDatabase/BKLibrary-1-091020131601.sqlite';

const dbInstances = [sqlite.open(macPathAnnotation), sqlite.open(macPathBooks)];

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
