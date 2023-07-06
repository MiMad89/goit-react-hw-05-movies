import { Link, useLocation } from "react-router-dom";

const TrendingList = ({movies}) => {
    const setlocation = useLocation();

    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <Link
                        to={{
                            pathname: `/movies/${movie.id}`,
                            state: { from: setlocation },
                        }}
                    >
                        {movie.title}
                    </Link>
                </li>
            ))}
        </ul>
        
    )
}

export default TrendingList;