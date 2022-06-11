import PropTypes from 'prop-types';
import s from '../Form/Form.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contact-action';
function Contacts({ contacts, children,  }) {
  const dispatch = useDispatch()
  return (
    <div className={s.wrap}>
      {children}
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={s.item} key={id}>
              {name}: {number}{' '}
              <button onClick={() =>  dispatch(deleteContact(id))}>Delete</button>{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  children: PropTypes.node,
};

export default Contacts;
