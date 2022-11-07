import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    const checkContactName = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (checkContactName) {
      return alert(`${data.name} is already in contacts!`);
    }
    const contactForList = { id: nanoid(4), ...data };
    setContacts(prevState => [...prevState, contactForList]);
  };

  const handleFilter = e => {
    setFilter(e.target.value);
  };

  const handleFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
  };

  const handleDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2 className={css.title}>Contacts</h2>
      <Filter value={filter} onFilter={handleFilter} />
      <ContactList user={handleFilteredContacts()} onDelete={handleDelete} />
    </div>
  );
};