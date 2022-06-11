import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addcontact,
  deleteContact,
  filterContact,
} from './contact-action';

const items = createReducer([], {
  [addcontact]: (state, { payload }) => {
    const flag = state.find(item => item.name === payload.name);
    return flag
      ? (alert(`${payload.name} is alredy in contacts`), state)
      : [...state, payload];
  },
  [deleteContact]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});
const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
