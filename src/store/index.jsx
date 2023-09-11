import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cashReduser } from './cashReduser';
import  { customerReduser } from './customerReduser';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    cash: cashReduser,
    customers: customerReduser,
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));