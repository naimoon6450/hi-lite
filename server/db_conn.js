const sqlite = require('sqlite');

// const macPathAnnotation =
//   '/Users/admin/Library/Containers/com.apple.iBooksX/Data/Documents/AEAnnotation/AEAnnotation_v10312011_1727_local.sqlite';
// const macPathBooks =
//   '/Users/admin/Library/Containers/com.apple.iBooksX/Data/Documents/BKLibrary/BKLibrary-1-091020131601.sqlite';
// stored locally in Windows

// had to change to full path and forward slash as it was not working
const winPathAnnotation =
  '/mnt/c/Users/naimun.siraj/fullstack/Stackathon/sqlite_db/AEAnnotation/AEAnnotation_v10312011_1727_local.sqlite';
const winPathBooks =
  '/mnt/c/Users/naimun.siraj/fullstack/Stackathon/sqlite_db/BKSeriesDatabase/BKLibrary-1-091020131601.sqlite';

const dbInstances = [sqlite.open(winPathAnnotation)];

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
