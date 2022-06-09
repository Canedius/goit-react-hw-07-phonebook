import {useEffect} from 'react';
import Form from './Form/Form'
import ContactList from './Contacts/Contacts'
import Filter from './Filter/Filter'
import s from './Form/Form.module.css';
import { connect } from 'react-redux';
import { storage } from 'redux/contacts/contact-action';
 const App =({contacts,filter,setContacts})=>{

 useEffect(()=>{
  const contactsStore = localStorage.getItem(`contacts`)
  const contactsParse = JSON.parse(contactsStore)
  if (contactsParse) {
    setContacts(contactsParse)
  }
 },[setContacts])

 useEffect(()=>{
    localStorage.setItem(`contacts`,JSON.stringify(contacts))
 },[contacts])
      const normalizedFilter= filter.toLowerCase()
      const visibleContacts = contacts.filter(contact =>contact.name.toLowerCase().includes(normalizedFilter) )
    return (<div className={s.wrap}>
      <h2>Phonebook</h2>
      <Form  />
      <h2>Contacts</h2>
      <ContactList contacts={visibleContacts} >
      <Filter value={filter} />
      </ContactList>
    </div>)
  
}

const mapDispatchToprops = dispatch=>({
  setContacts: (data)=>dispatch(storage(data))
})


const mapStateToProps = state =>{
  return{
    contacts : state.contacts.items,
    filter : state.contacts.filter
  }
 }
export default connect(mapStateToProps,mapDispatchToprops)(App)