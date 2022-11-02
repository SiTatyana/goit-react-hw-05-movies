import logo from "noImage.png";

class API_CONSTRUCTOR {
    constructor(key = "7cf73ae9a20e9f92c4fc22e4e8bf4150"){
        this.apiKey = key;
        this.imageURL = "https://image.tmdb.org/t/p/w500";
        this.allGenres = true;
        this.genres = [];
    }
    async getTrendingMovies(page = 1){
        try{
            await this.getGenres();
            const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${this.apiKey}&page=${page}`);
            if(response.ok){
                const data = await response.json();
                return this.showMovieInfo(data);
            }
        }
        catch(error){
            console.log(error);
        }
    }
    async getSearchMovie(query){
        await this.getGenres();
        try{
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`);
            if(response.ok){
                const data = await response.json();
                return this.showMovieInfo(data);
            }
        }
        catch(error){
            console.log(error);
        }
    }
    async getMovieInfo(id){
        await this.getGenres();
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`);
            if(response.ok){
                const data = await response.json();
                return this.showMovieInfo(data);
            }
        }
        catch(error){
            console.log(error);
        }
    }
    async getMovieCredits(id){
        await this.getGenres();
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.apiKey}`);
            if(response.ok){
                const data = await response.json();
                data.cast = this.showCasts(data.cast);
                return data;
            }
        }
        catch(error){
            console.log(error);
        }
    }
    async getMovieReviews(id){
        await this.getGenres();
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${this.apiKey}`);
            if(response.ok){
                const data = await response.json();
                return data;
            }
        }
        catch(error){
            console.log(error);
        }
    }
    showMovieInfo(data){
        if(Array.isArray(data.results)){
            data.results = data.results.map(item => {
                item.poster_path = this.imageURL + item.poster_path;
                item.backdrop_path = this.imageURL + item.backdrop_path;
                item.genre_ids = this.showGenres(item.genre_ids);
                return item;
            })
        }
        else{
            data.poster_path = this.imageURL + data.poster_path;
            data.backdrop_path = this.imageURL + data.backdrop_path;
            data.genre_ids = this.showGenres(data.genre_ids);
        }
        return data;
    }
    async getGenres(){
        if(this.allGenres){
            this.allGenres = !this.allGenres;
            const URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}`
            const URL2 = `https://api.themoviedb.org/3/genre/tv/list?api_key=${this.apiKey}`
            try{
                const response = await fetch(URL);
                if(response.ok){
                    const data = await response.json();
                    this.genres.push(...data.genres);
                }
            }
            catch(error){
                console.error("Error in getGenres")
                console.log(error);
            }
            try{
                const response = await fetch(URL2);
                if(response.ok){
                    const data = await response.json();
                    this.genres.push(...data.genres);
                }
            }
            catch(error){
                console.error("Error in getGenres")
                console.log(error);
            }
        }
    }
        showGenres(arr = []){
        if(this.genres.length < 1){
            return arr;
        }
        arr = arr.map((id) => this.genres.find(item => item.id === id).name);
        return arr;
    }
    showCasts(arr = []){
        arr = arr.map(item => {
            if(!item.profile_path){
                item.profile_path = logo;
                return item;
            }
            item.profile_path = this.imageURL + item.profile_path;
            return item
        });
        return arr
    }
}

export default API_CONSTRUCTOR;
export const api = new API_CONSTRUCTOR();