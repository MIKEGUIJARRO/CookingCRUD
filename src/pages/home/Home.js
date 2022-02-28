import { projectFirestore } from '../../firebase/config';

//Styles
import './Home.css';

//Components
import RecipeList from '../../components/RecipeList';
import { useEffect, useState } from 'react/cjs/react.development';

export default function Home() {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsPending(true);
        const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
            console.log('Subscription runned')
            if (snapshot.empty) {
                setError('No recipes to load');
                setIsPending(false);
            } else {
                let results = []
                snapshot.docs.forEach((doc) => {
                    results.push({
                        id: doc.id,
                        ...doc.data(),
                    });
                });
                setData(results);
                setIsPending(false);
            }
        }, (err) => {
            setError(err.message);
            setIsPending(err.message);
        });
        return () => unsub();
    }, []);

    return (
        <div className='home'>
            {error && <p className='error'></p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}
