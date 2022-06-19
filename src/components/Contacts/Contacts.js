import PropTypes from 'prop-types';
import { useFetchContactsQuery } from 'redux/contacts/contact-slice';
import s from '../Form/Form.module.css';
import { useDeleteContactMutation } from 'redux/contacts/contact-slice';
import { useSelector } from 'react-redux'
import {getFilter } from 'redux/contacts/contact-selectors';;


function Contacts({children  }) {
  const filter = useSelector(getFilter)
  const{data} = useFetchContactsQuery()
  const normalizedFilter = filter.toLowerCase()
  const visibleContacts = data && data.filter(contact =>contact.name.toLowerCase().includes(normalizedFilter))
  const [deleteContact]= useDeleteContactMutation()

  return data && (
    <div className={s.wrap}>
      {children}
      <ul className={s.list}>
        {visibleContacts.map(({ id, name, phone  }) => {
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
