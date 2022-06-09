import PropTypes from 'prop-types';
import s from '../Form/Form.module.css';
import { connect } from 'react-redux';
import { filterContact } from 'redux/contacts/contact-action';
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
const mapDispatchToprops = dispatch => ({
  onChange: e => dispatch(filterContact(e)),
});
export default connect(null, mapDispatchToprops)(Filter);
