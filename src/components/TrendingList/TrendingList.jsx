import { Link, useLocation } from "react-router-dom";

export const TrendingList = ({movies}) => {
    const setlocation = useLocation();

    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link to={`&{movie.id}`} state ={{from: setlocation}}>
                        {movie.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

