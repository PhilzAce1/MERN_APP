import { createStore, applyMiddleware, compose }  from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
// const middleware = [thunk];
// const devtool =     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

// const store = createStore(rootReducer, initialState, compose(
//     applyMiddleware(...middleware),
//     // devtool
// ));

export default store


