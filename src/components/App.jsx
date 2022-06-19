import Form from './Form/Form'
import ContactList from './Contacts/Contacts'
import Filter from './Filter/Filter'
import s from './Form/Form.module.css';

 const App =()=>{
    return (<div className={s.wrap}>
      <h2>Phonebook</h2>
      <Form/>
      <h2>Contacts</h2>
      <ContactList  >
      <Filter/>
      </ContactList>
    </div>)
  
}

export default App