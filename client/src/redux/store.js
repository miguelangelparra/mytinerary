import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

//Inicializador de Store
const initialState = {};

const middleware = [thunk];

//Creador de Store para Redux
const store = createStore(
  //Declaracion de Reducers
  rootReducer,
  initialState,
  //Middlewares declaras en variable + middleware de extension DEVTOOLS
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

export default store;