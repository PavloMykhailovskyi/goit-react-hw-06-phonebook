import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types'
import css from './ContactList.module.css'

export const ContactList = ({ user, onDelete }) => {
  return (
    <ul className={css.contact__list}>
      {user.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
          onDelete={onDelete}
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
    onDelete: PropTypes.func.isRequired,
}