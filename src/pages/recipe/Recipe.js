import './Recipe.css';

import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useEffect, useState } from 'react/cjs/react.development';
import { projectFirestore } from '../../firebase/config';

export default function Recipe() {
    const { id } = useParams();
    const { mode } = useTheme();

    const [recipe, setRecipe] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const subs = projectFirestore.collection('recipes')
            .doc(id).onSnapshot((doc) => {
                if (doc.exists) {
                    setIsPending(false);
                    setRecipe(doc.data());
                } else {
                    setIsPending(false);
                    setError('Error found')
                }
                console.log(doc.data());
            }, (err) => {
                console.log(err);
                setError(err.message);
            });

        return () => subs
    }, [id]);

    const handleClick = () => {
        projectFirestore.collection('recipes').doc(id).update()
    }

    return (
        <div className={`recipe ${mode}`}>
            {error && <p className='error'>{error}</p>}
            {isPending && <p>Loading...</p>}
             {recipe && (
                <>
                    <h2 className='page-title'>{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to cook.</p>
                    <ul>
                        {recipe.ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                    <p className='method'>{recipe.method}</p>
                    <button onClick={handleClick}>Update me</button>
                </>
            )} 
        </div>
    )
}
