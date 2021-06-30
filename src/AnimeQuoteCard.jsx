const AnimeQuoteCard = ({ quoteProp }) => {

    const { anime, character, quote } = quoteProp;

    return (
        <div>
            <h2>{anime} Quote by {character}:</h2>
            <h5>{quote}</h5>
        </div>
    )
}

export default AnimeQuoteCard;