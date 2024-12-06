import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contacts/contactsOps';
import { selectFilteredContacts } from './redux/contacts/contactsSlice';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Телефонна книга</h1>
      <ContactForm />
      <h2>Контанти</h2>
      <Filter />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;