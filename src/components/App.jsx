import {useState,useEffect} from 'react';
import Form from './Form/Form'
import ContactList from './Contacts/Contacts'
import Filter from './Filter/Filter'
import s from './Form/Form.module.css';
export const App =()=>{
  const [contacts,setContacts]= useState([])
  const [filter,setFilter] = useState('')
  
 
const submitHandler = data =>{
  const flag = contacts.find(contact => contact.name === data.name)
   return  flag?alert(`${data.name} is alredy in contacts`): setContacts([data,...contacts])
  }



const chengeFilter = e=>{
  setFilter(e.currentTarget.value)
}

 const deleteContacts = id =>{
  setContacts(contacts.filter(contact => contact.id !== id))
 }

 useEffect(()=>{
  const contactsStore = localStorage.getItem(`contacts`)
  const contactsParse = JSON.parse(contactsStore)
  if (contactsParse) {
    setContacts(contactsParse)
  }

 },[])

 useEffect(()=>{
    localStorage.setItem(`contacts`,JSON.stringify(contacts))
 },[contacts])




      const normalizedFilter= filter.toLowerCase()
      const visibleContacts = contacts.filter(contact =>contact.name.toLowerCase().includes(normalizedFilter) )
    return (<div className={s.wrap}>
      <h2>Phonebook</h2>
      <Form onSubmit={submitHandler} />
      <h2>Contacts</h2>
      <ContactList contacts={visibleContacts} deleteContacts={deleteContacts}>
      <Filter value={filter} onChange ={chengeFilter}/>
      </ContactList>
    </div>)
    
  
  
}