export default function MovieCard(props) {
    return (
    <div className="movie_card">
        <div className="info_section">
            <div className="movie_header">
                <img className="locandina" src={props.imageUrl} />
                <h1>{props.title}</h1>
                <h4>{props.year}, {props.author}</h4>
                <span className="minutes">{props.minutes} min</span>
                <p className="type">{props.type}</p>
            </div>
            <div className="movie_desc">
                <p className="text">
                    {props.content}
                </p>
            </div>
        </div>
        <div className={props.blur}></div>
    </div>
    )
}