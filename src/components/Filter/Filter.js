import PropTypes from 'prop-types';
import s from '../Form/Form.module.css';
function Filter({ value, onChange }) {
  return (
    <label className={s.formLabel}>
      Find contacts by name
      <input
        className={s.input}
        tupe="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Filter;
