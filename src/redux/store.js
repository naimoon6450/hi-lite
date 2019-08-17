import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

// action type
const GET_HIGHLIGHTS = 'GET_HIGHLIGHTS';
const GET_FAILURE = 'GET_FAILURE';
const HIGHLIGHT_REQUEST = 'HIGHLIGHT_REQUEST';

// for loading ability
const fetchingHighlightData = () => ({
  type: HIGHLIGHT_REQUEST,
});

const getHighlights = highlights => ({
  type: GET_HIGHLIGHTS,
  highlights,
});

// higlight fetching thunk
export const fetchHighlights = () => {
  return dispatch => {
    dispatch(fetchingHighlightData());
    axios
      .get(`/api/highlights`)
      .then(({ data }) => {
        setTimeout(() => {
          dispatch(getHighlights(data));
        }, 1000);
      })
      .catch(error => console.error(error));
  };
};

let initialState = {
  joinedHighlights: [],
  isFetching: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HIGHLIGHT_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_HIGHLIGHTS:
      return {
        ...state,
        joinedHighlights: action.highlights,
        isFetching: false,
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
