import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './Form.module.css';
import { useState } from 'react';
import {useDispatch } from 'react-redux';
import { addcontact } from 'redux/contacts/contact-action';
export const Form = () => {
  const [id, setId] = useState(nanoid());
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch()

  const handelNameChange = e => {
    setName(e.currentTarget.value);
  };

  const handelNumberChange = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addcontact({ id, name, number }));

    reset();
  };
  const reset = () => {
    setId(nanoid());
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.formLabel}>
          {' '}
          Name
          <input
            className={s.input}
            onChange={handelNameChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={s.formLabel}>
          {' '}
          Number
          <input
            className={s.input}
            onChange={handelNumberChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit"> add contact</button>
      </form>
    </>
  );
};



export default Form;
