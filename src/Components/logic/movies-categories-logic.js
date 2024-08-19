import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieCategories = () => {

  const [genres, setGenres] = useState([]);

  useEffect(()=>{
    const fetchGenres = async ()=>{
      const url = "https://api.themoviedb.org/3/genre/movie/list?language=pl";
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTVhMzVmNmZjMzllMjZjMzBhNmVlOWQwNjdjZWY3YSIsInN1YiI6IjY1MjI3MGVhZWE4NGM3MDBhZWVlNTE2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QiPF-6Wp-bXF_zvYMLy71Ryt3muiE0EJ6WslCE_FfEU'
        }
      }

      try {
        const genreResponse = await fetch(url, options);
        const genreJson = await genreResponse.json();
        setGenres(genreJson.genres);
      } catch (err) {
        console.error('error:', err);
      };
    }
    fetchGenres();
  },[]);

  if(!genres){
    return <p>Loading...</p>;
  }
    
    const renderMoviesCategories = () =>{
        
     return genres.map(genre=>(
      <Link to={`Cinema/genre/${genre.id}`} key={genre.id}>
        <p>{genre.name}</p>
      </Link>
      ));
    }
    return(
        <>
            {renderMoviesCategories()}
        </>
    )
}
export default MovieCategories
