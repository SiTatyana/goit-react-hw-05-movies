import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Review } from "components/Review/Review";
import { api } from "servises/fetchApi";

const Reviews = ({isLoading}) => {
    const {movieId} = useParams();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        isLoading(true);
        api.getMovieReviews(movieId)
        .then(data => {
            if(!data.results.length){
                return;
            }
            setReviews(data.results);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() =>{
            isLoading(false);
        })
    }, [movieId, isLoading]);
    
    return <>
        {reviews.length > 0 ? 
        <ul>
           {reviews.map(item => <li key={item.author}><Review review={item}/></li>)}
        </ul>
        : <p>Sorry, there are no reviews yet...</p>}
    </>  
}

export default Reviews;