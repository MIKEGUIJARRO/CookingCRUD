import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme';

// Styles
import './Navbar.css'

// Components
import { Searchbar } from './Searchbar'

export default function Navbar() {
    const { color } = useTheme();

    return (
        <div className='navbar' style={{ background: color }}>
            <nav >
                <Link to={'/'} className='brand'>
                    <h1>Cooking With Mike 🌶</h1>
                </Link>
                <Searchbar />
                <Link to={'/create'}>
                    <h1>Create recipe</h1>
                </Link>
            </nav>
        </div>
    )
}
