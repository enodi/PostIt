import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export default function configureStore() {
  // createStore function connects our store to the rootReducer
  // and utilizes the thunk middleware
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
