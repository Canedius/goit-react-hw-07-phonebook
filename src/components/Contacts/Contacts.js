import PropTypes from 'prop-types';
import s from '../Form/Form.module.css';
import { useDeleteContactMutation } from 'redux/contacts/contact-slice';


function Contacts({data,children  }) {
  const [deleteContact]= useDeleteContactMutation()
  return data && (
    <div className={s.wrap}>
      {children}
      <ul className={s.list}>
        {data.map(({ id, name, phone  }) => {
          return (
            <li className={s.item} key={id}>
              <span>{name}: {phone}{' '}</span>
              <button onClick={() => deleteContact(id)}>Delete</button>{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
Contacts.propTypes = {
  
  children: PropTypes.node,
};

export default Contacts;
