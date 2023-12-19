// Store.ts
import { createStore } from 'redux';
import pokerReducer from '../reducers/Reducer';

const store = createStore(pokerReducer);

export default store;
