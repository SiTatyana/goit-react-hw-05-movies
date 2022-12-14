import { useState, useEffect, Suspense } from "react";
import { useParams, useLocation, Outlet } from "react-router-dom";
import { FinmInfo } from "components/FilmInfo/FilmInfo.jsx";
import { GoBackLink } from "./MovieDetailStyled";
import { api } from "servises/fetchApi.jsx";
import { Loader } from "components/Loader/Loader.jsx";

const MovieDetails = ({isLoading}) => {
    const location = useLocation();
    const {movieId} = useParams();
    const [movieInfo, setMovieInfo] = useState({});
    useEffect(() => {
        isLoading(true);
        api.getMovieInfo(movieId)
        .then(data => {
            setMovieInfo(data);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            isLoading(false);
        })
    }, [movieId, isLoading]);

    return <main>
        <GoBackLink to={location.state ? location.state.from : "/"}>Go back</GoBackLink>
        {movieInfo.title && <FinmInfo movieInfo={movieInfo} backLocation={location.state ?? "/"}/>}
        <Suspense fallback={<Loader/>}>
            <Outlet/>
        </Suspense>
    </main>
}

export default MovieDetails;