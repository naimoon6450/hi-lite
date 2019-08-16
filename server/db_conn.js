const sqlite = require('sqlite');

const macPathAnnotation =
  '/Users/admin/Library/Containers/com.apple.iBooksX/Data/Documents/AEAnnotation/AEAnnotation_v10312011_1727_local.sqlite';
const macPathBooks =
  '/Users/admin/Library/Containers/com.apple.iBooksX/Data/Documents/BKLibrary/BKLibrary-1-091020131601.sqlite';
// stored locally in Windows
// const winPathAnnotation =
//   '../../AEAnnotation/AEAnnotation_v10312011_1727_local.sqlite';
// const winPathBooks = './../BKSeriesDatabase/BKLibrary-1-091020131601.sqlite';

const dbInstances = [sqlite.open(macPathAnnotation)];

const db_conn = () => {
  return Promise.all(dbInstances)
    .then(([annotDb]) => {
      return [annotDb];
    })
    .catch(e => {
      console.error(e);
    });
};

module.exports = db_conn;
