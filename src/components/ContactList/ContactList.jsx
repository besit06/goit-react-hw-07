import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOps';
import { selectFilteredContacts, selectLoading } from '../../redux/contacts/contactsSlice';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={s.item}>
          <p>
            {name}: {phone}
          </p>
          <button onClick={() => handleDelete(id)} className={s.button}>
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;