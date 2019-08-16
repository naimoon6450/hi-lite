const annnotRouter = require('express').Router();
const db = require('../db_conn');
// const macPathBooks =
//   '/Users/admin/Library/Containers/com.apple.iBooksX/Data/Documents/BKLibrary/BKLibrary-1-091020131601.sqlite';
const winPathBooks =
  '/mnt/c/Users/naimun.siraj/fullstack/Stackathon/sqlite_db/BKSeriesDatabase/BKLibrary-1-091020131601.sqlite';

const annotationQuery =
  'select ZANNOTATIONREPRESENTATIVETEXT as BroaderText, ZANNOTATIONSELECTEDTEXT as SelectedText, ZANNOTATIONNOTE as Note, ZFUTUREPROOFING5 as Chapter, ZANNOTATIONCREATIONDATE as Created, ZANNOTATIONMODIFICATIONDATE as Modified, ZANNOTATIONASSETID FROM ZAEANNOTATION WHERE ZANNOTATIONSELECTEDTEXT IS NOT NULL';

const joinQuery =
  'select ZANNOTATIONASSETID as asset_id, bookDb.ZBKLIBRARYASSET.ZTITLE as title, bookDb.ZBKLIBRARYASSET.ZAUTHOR as author,ZANNOTATIONLOCATION as location,ZANNOTATIONSELECTEDTEXT as selected_text, ZANNOTATIONNOTE as note,ZANNOTATIONREPRESENTATIVETEXT as represent_text, ZFUTUREPROOFING5 as chapter, ZANNOTATIONSTYLE as style, ZANNOTATIONMODIFICATIONDATE as modified_date from ZAEANNOTATION left join bookDb.ZBKLIBRARYASSET on ZAEANNOTATION.ZANNOTATIONASSETID = bookDb.ZBKLIBRARYASSET.ZASSETID where ZANNOTATIONDELETED = 0 and ZANNOTATIONSELECTEDTEXT IS NOT NULL order by ZANNOTATIONASSETID, ZPLLOCATIONRANGESTART';

annnotRouter.get('/', (req, res, next) => {
  db().then(([annotDb, bookDb]) => {
    const attachBookDb = `ATTACH DATABASE '${winPathBooks}' as bookDb`;
    annotDb
      .run(attachBookDb)
      .then(bookDb => {
        annotDb
          .all(joinQuery)
          .then(result => {
            res.json(result);
          })
          .catch(next);
      })
      .catch(next);
  });
});

module.exports = annnotRouter;
