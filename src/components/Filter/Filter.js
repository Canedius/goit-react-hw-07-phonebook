import PropTypes from 'prop-types';
import s from '../Form/Form.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/contact-action';
function Filter({ value, }) {
  const dispatch = useDispatch()
  return (
    <label className={s.formLabel}>
      Find contacts by name
      <input
        className={s.input}
        tupe="text"
        value={value}
        onChange={(e)=>dispatch(filterContact(e))}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;
