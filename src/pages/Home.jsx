import { useState, useEffect } from "react";
import { FilmList } from "components/FilmList/FilmList";
import { api } from "servises/fetchApi";

const Home = ({isLoading}) => {
    const [trendings, setTrendings] = useState([]);
    useEffect(() => {
        isLoading(true);
        api.getTrendingMovies()
        .then(data => {
            setTrendings(data.results);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() =>{
            isLoading(false);
        })
    }, [isLoading]);

    return <main>
        <h1>Trendings today</h1>
        {trendings.length > 0 && 
            <FilmList list={trendings} path={'movies/'}/>
        }
    </main>
}

export default Home;