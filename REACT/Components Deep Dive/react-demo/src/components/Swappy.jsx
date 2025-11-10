import { useEffect, useState } from "react"

export default function Swappy() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then((response) => response.json())
            .then(data => {
                setCharacters(data.results)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, []);


    return (
        <section>
            <h1>Star Wars Characters</h1>

            <ul>
                {characters.map(character => <li key={character.name}>{character.name}</li>)}
            </ul>
        </section>
    )
}