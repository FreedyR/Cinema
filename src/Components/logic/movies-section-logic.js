import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MoviePhoto } from "../style/MovieSectionStyle";

const MovieSectionMovies = () => {
  const [movies, setMovies] = useState([]);
  const { genre, search } = useParams();



  useEffect(() => {
    const fetchData = async () => {
      let url;
      if (!genre&&!search) {
        url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pl-PL&page=1&sort_by=popularity.desc";
      } 
      if(genre) {
        url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pl-PL&page=1&sort_by=popularity.desc&with_genres=${genre}`;
      }
      if(search){
        url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=pl-PL&page=1`;
      }

      console.log(url);
      const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTVhMzVmNmZjMzllMjZjMzBhNmVlOWQwNjdjZWY3YSIsInN1YiI6IjY1MjI3MGVhZWE4NGM3MDBhZWVlNTE2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QiPF-6Wp-bXF_zvYMLy71Ryt3muiE0EJ6WslCE_FfEU",
      },
    };


    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setMovies(json.results);
    } catch (error) {
      console.error("error:", error);
    }
  };

  fetchData();
  console.log(movies);
}, [genre, search]);

  const renderMovies = () => {
    return movies.map((movie, index) => (
      
      <MoviePhoto key={index}>
        <Link tabIndex="1" key={movie.id} to={`/Cinema/chosen/${movie.id}`}>
        <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt={movie.title} />
        <p>{movie.title}</p>
        </Link>
      </MoviePhoto>
    
    ));
  };
  return <>{renderMovies()}</>;
};
export default MovieSectionMovies;
