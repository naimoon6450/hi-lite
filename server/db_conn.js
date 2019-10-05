const sqlite = require('sqlite');

// const macPathAnnotation =
//   '/Users/admin/Library/Containers/com.apple.iBooksX/Data/Documents/AEAnnotation/AEAnnotation_v10312011_1727_local.sqlite';
// const macPathBooks =
// ('/Users/admin/Library/Containers/com.apple.iBooksX/Data/Documents/BKLibrary/BKLibrary-1-091020131601.sqlite');

// stored locally in Windows
// had to change to full path and forward slash as it was not working
const winPathAnnotation =
  '/mnt/c/Users/naimun.siraj/fullstack/Stackathon/sqlite_db/AEAnnotation/AEAnnotation_v10312011_1727_local.sqlite';
const winPathBooks =
  '/mnt/c/Users/naimun.siraj/fullstack/Stackathon/sqlite_db/BKSeriesDatabase/BKLibrary-1-091020131601.sqlite';

const dbInstances = [sqlite.open(winPathAnnotation)];

const db_conn = () => {
  return Promise.all(dbInstances)
    .then(([annotDb, bookDb]) => {
      const attachBookDb = `ATTACH DATABASE '${winPathBooks}' as bookDb`;
      return annotDb.all('PRAGMA database_list').then(result => {
        // checks to see if db is already attached
        if (!result[1]) {
          return annotDb.run(attachBookDb).then(bookDb => {
            return [annotDb, bookDb];
          });
        }
        return [annotDb, bookDb];
      });
    })
    .catch(e => {
      console.error(e);
    });
};

module.exports = db_conn;
