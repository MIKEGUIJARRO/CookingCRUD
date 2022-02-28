// styles
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useTheme } from '../hooks/useTheme';
import deleteIcon from '../assets/delete-icon.svg'
import './RecipeList.css';

import { projectFirestore } from '../firebase/config';

export default function RecipeList({ recipes }) {

    const { mode } = useTheme();

    if (recipes.length === 0) {
        return <div className='error'>Not recipes to load...</div>
    }

    const handleClick = (id) => {
        projectFirestore.collection('recipes').doc(id).delete().then((response) => {
            console.log('Project deleted')
        });
    }

    return (
        <div className='recipe-list'>
            {recipes.map((recipe) => (
                <div key={recipe.id} className={`card ${mode}`}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <div>{recipe.method.substring(0, 100)}</div>
                    <Link to={`/recipe/${recipe.id}`}>Go to recipe</Link>
                    <img src={deleteIcon}
                        alt='Delete recipe'
                        className='delete'
                        onClick={() => handleClick(recipe.id)} />
                </div>
            ))}
        </div>
    )
}
