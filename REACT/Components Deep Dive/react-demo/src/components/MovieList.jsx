import { useState } from "react";

export default function MovieList() {
    const [movies, setMovies] = useState([
        'The Matrix',
        'Cars',
        'The King of The Jungle',
        'Lord of the Rings',
    ]);

    const updateMoviesClickHandler = () => {
        setMovies(oldMovies => {
            //const newMovies = oldMovies.slice(); // new reference
            const newMovies = [...oldMovies]; //new reference
            // newMovies.push('Star Wars');

            const removedMovie = newMovies.shift(); // remove

            newMovies.push(removedMovie);

            return newMovies;
        });
    };

    return (
        <section>
            <h1>Movie List</h1>

            <ul>
                {movies.map(movie => <li key={movie}>{movie}</li>)}
            </ul>

            <button onClick={updateMoviesClickHandler}>Update Movies</button>

        </section>
    );
}