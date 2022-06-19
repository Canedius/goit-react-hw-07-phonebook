import PropTypes from 'prop-types';
import s from '../Form/Form.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/contact-action';
import { useSelector } from 'react-redux'
import {getFilter } from 'redux/contacts/contact-selectors';;

function Filter() {
  const dispatch = useDispatch()
  const filter = useSelector(getFilter)
  return (
    <label className={s.formLabel}>
      Find contacts by name
      <input
        className={s.input}
        tupe="text"
        value={filter}
        onChange={(e)=>dispatch(filterContact(e))}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  changeFilter:PropTypes.func
};

export default Filter;
