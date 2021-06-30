import { useState, useEffect } from 'react';
import axios from 'axios';
import AnimeQuoteCard from './AnimeQuoteCard';

const AnimeQuoteManager = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [quotes, setQuotes] = useState([]);
    const loadTime = 3000;

    useEffect(() => {
        setTimeout(() => {
            axios.get('https://animechan.vercel.app/api/quotes/anime?title=hyouka')
                .then((result) => {
                    setIsLoaded(true);
                    setQuotes(result.data);
                    console.log("Ayo! I populated ur thingy... maybe?")
                    console.log(result.data);
                }, (error) => {
                    setIsLoaded(true);
                    setError(error);
                    console.log("Ayo! Something be WAKC!");
                }
                );
        }, loadTime);
    });


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                {quotes.map((quote) => (
                    <AnimeQuoteCard quoteProp={quote} />
                ))}
            </div>
        )
    }
}

export default AnimeQuoteManager;