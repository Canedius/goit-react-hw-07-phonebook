import Form from './Form/Form'
import ContactList from './Contacts/Contacts'
import Filter from './Filter/Filter'
import s from './Form/Form.module.css';
import { useState } from 'react';
import { useFetchContactsQuery } from 'redux/contacts/contact-slice';

 const App =()=>{
  const [filter, setFilter] = useState('');
  const{data} = useFetchContactsQuery()
  const normalizedFilter = filter.toLowerCase()
  const visibleContacts = data && data.filter(contact =>contact.name.toLowerCase().includes(normalizedFilter))

  const changeFilter = e => {
  setFilter(e.currentTarget.value)};

    return (<div className={s.wrap}>
      <h2>Phonebook</h2>
      <Form/>
      <h2>Contacts</h2>
      <ContactList data ={visibleContacts} >
      <Filter filter={filter} onChange={changeFilter} />
      </ContactList>
    </div>)
  
}

export default App