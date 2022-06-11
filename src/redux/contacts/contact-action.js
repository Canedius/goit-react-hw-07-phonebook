import { createAction } from '@reduxjs/toolkit';

export const addcontact = createAction('add/contact');

export const deleteContact = createAction('delete/contact');

export const filterContact = createAction('filter/contact', e => ({
  payload: e.currentTarget.value,
}));

