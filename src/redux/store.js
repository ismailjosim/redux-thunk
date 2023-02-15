import { createStore, applyMiddleware } from "redux";
// import logger from 'redux-logger';
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from './reducers/rootReducer';
import cartCounter from './middlewares/cartCounter';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter)));

export default store;
