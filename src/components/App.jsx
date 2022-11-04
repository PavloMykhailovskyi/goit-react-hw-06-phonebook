import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css'



export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const checkContactName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (checkContactName) {
      return alert(`${data.name} is already in contacts`);
    }

    const contactForList = { id: nanoid(4), ...data };
    this.setState(
      prev => ({ contacts: [...prev.contacts, contactForList] })
    );
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handleFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
  };

  handleDelete = id => {
    this.setState(prev => ({contacts: prev.contacts.filter(contact => contact.id !== id)}))
  }


  
  render() {
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2 className={css.title}>Contacts</h2>
        <Filter value={this.state.filter} onFilter={this.handleFilter} />
        <ContactList
          user={this.handleFilteredContacts()}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}


