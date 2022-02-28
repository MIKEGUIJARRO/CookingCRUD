import { useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

// Styles

import './Searchbar.css';

export const Searchbar = () => {

    const [term, setTerm] = useState();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        history.push(`/search?q=${term}`);
    }

    return (
        <div className='searchbar'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor='search'>Search:</label>
                <input
                    type={'text'}
                    id='search'
                    onChange={(e) => setTerm(e.target.value)}
                    value={term}
                    required
                ></input>

            </form>

        </div>
    )
}
