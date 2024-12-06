import { useSelector, useDispatch } from 'react-redux';
import { setFilter, selectFilter } from '../../redux/contactsSlice';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={s.label}>
      Знайти за ім'ям
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={s.inputF}
      />
    </label>
  );
};

export default Filter;