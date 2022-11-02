import { SearchForm } from "components/SearchFrom/SearchFrom"
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { FilmList } from "components/FilmList/FilmList";
import { api } from "servises/fetchApi";


const Movies = ({isLoading}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    const [films, setFilms] = useState([]);
    useEffect(() => {
        if(!keyword){
            return;
        }
        isLoading(true);
        api.getSearchMovie(keyword)
        .then(data => {
            if(data.results.length === 0){
                return;
            }
            setFilms(data.results);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            isLoading(false);
        })
    }, [keyword, isLoading])
    return<main>
        <SearchForm onSubmit={setSearchParams}/>
        {films.length > 0 && 
            <FilmList list={films}/>
        }
    </main>
}

export default Movies;