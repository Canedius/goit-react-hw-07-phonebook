import { createAction } from '@reduxjs/toolkit';
export const filterContact = createAction('filter/contact', e => ({
    payload: e.currentTarget.value,
  }));