import React from 'react';
import Form from './Form/Form'
import Contacts from './Contacts/Contacts'
import Filter from './Filter/Filter'
export class App extends React.Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
 
submitHandler = data =>{
  const flag = this.state.contacts.find(contact => contact.name === data.name)
  this.setState(prevState =>{
   return  flag?alert(`${data.name} is alredy in contacts`): {contacts :[data, ...prevState.contacts]}
    
     
  })
}
chengeFilter = e=>{
  this.setState({filter: e.currentTarget.value})
}
deleteContacts = id =>{
  this.setState(prevState =>({
    contacts: prevState.contacts.filter(contact => contact.id !== id)
  }));
}


    render(){
      const normalizedFilter= this.state.filter.toLowerCase()
      const visibleContacts = this.state.contacts.filter(contact =>contact.name.toLowerCase().includes(normalizedFilter) )
    return (<div>
      <Form onSubmit={this.submitHandler} />
      
      <Contacts contacts={visibleContacts} deleteContacts={this.deleteContacts}>
      <Filter value={this.state.filter} onChange ={this.chengeFilter}/>
      </Contacts>

    </div>)
    
  }
  
}