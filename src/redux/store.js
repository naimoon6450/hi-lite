import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// action type
const GET_HIGHLIGHTS = 'GET_HIGHLIGHTS';
const GET_FAILURE = 'GET_FAILURE';

const fetchingHighlightData = () => ({
  type: HIGHLIGHT_REQUEST
});

let initialState = {
  joinedHighlights: [],
  isFetching: false
};

const reducer = (initialState = state, action) => {
  switch (action.type) {
    case HIGHLIGHT_REQUEST:
      return {
        ...state,
        isFetching: true
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
