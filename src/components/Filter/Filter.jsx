
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from 'redux/filterSlice'
import { getFilter } from 'redux/selectors'
import css from '../ContactForm/ContactForm.module.css'

export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const handleFilter = e => {
      dispatch(changeFilter(e.target.value));
    };

    return (
        <label className={css.label}>Find contacts by name
            <input type='text' value={filter} onChange={handleFilter} className={css.input} />
        </label>
    )
}

