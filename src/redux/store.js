import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

// action type
const GET_HIGHLIGHTS = 'GET_HIGHLIGHTS';
const GET_FAILURE = 'GET_FAILURE';
const HIGHLIGHT_REQUEST = 'HIGHLIGHT_REQUEST';
const GET_BOOK_COVERS = 'GET_BOOK_COVERS';

// for loading ability
const fetchingHighlightData = () => ({
  type: HIGHLIGHT_REQUEST
});

const getHighlights = highlights => ({
  type: GET_HIGHLIGHTS,
  highlights
});

const getBookCovers = bookCovers => ({
  type: GET_BOOK_COVERS,
  bookCovers
});

// higlight fetching thunk
export const fetchHighlights = () => {
  return dispatch => {
    dispatch(fetchingHighlightData());
    axios
      .get('/api/highlights')
      .then(({ data }) => {
        // call the covers
        axios.get('/api/highlights/covers').then(({ data }) => {
          // make the google calls
          const coverPromise = data.map(elem => {
            const authTitleArr = elem.split('|');
            return axios.get(
              `https://www.googleapis.com/books/v1/volumes?q=${
                authTitleArr[0]
              }+intitle+${authTitleArr[1]}+inauthor`
            );
          });
          Promise.all(coverPromise).then(resp => {
            const coverObj = resp.map(elem => {
              return {
                title: elem.data.items[0].volumeInfo.title,
                author: elem.data.items[0].volumeInfo.authors[0],
                imageUrl: elem.data.items[0].volumeInfo.imageLinks.thumbnail
              };
            });
            // dispatch action
            dispatch(getBookCovers(coverObj));
          });
        });
        setTimeout(() => {
          dispatch(getHighlights(data));
        }, 1000);
      })
      .catch(error => console.error(error));
  };
};

let initialState = {
  joinedHighlights: [],
  bookCovers: {},
  isFetching: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HIGHLIGHT_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case GET_HIGHLIGHTS:
      return {
        ...state,
        joinedHighlights: action.highlights,
        isFetching: false
      };
    case GET_BOOK_COVERS:
      return {
        ...state,
        bookCovers: action.bookCovers
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;
