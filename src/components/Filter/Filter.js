import PropTypes from 'prop-types';
import s from '../Form/Form.module.css';
function Filter({filter,onChange}) {
  return (
    <label className={s.formLabel}>
      Find contacts by name
      <input
        className={s.input}
        tupe="text"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  changeFilter:PropTypes.func
};

export default Filter;
