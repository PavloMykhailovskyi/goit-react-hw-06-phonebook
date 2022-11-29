import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import css from './ContactList.module.css'

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = () => {
    console.log(contacts);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul className={css.contact__list}>
      {filteredContacts().map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
    user: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
}