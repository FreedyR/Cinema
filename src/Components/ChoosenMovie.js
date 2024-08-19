import { useParams } from "react-router-dom";
import { MovieChosenSection, MovieChosenSectionInfo, Movie, Details,ActorsSection} from "./style/ChoosenMovieStyle";
import { useState, useEffect } from "react";
import Actor from "./logic/Actor";

const ChoosenMovie = () => {
  const [movie, setMovie] = useState();
  const [cast, setCast] = useState();

  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const movieUrl = `https://api.themoviedb.org/3/movie/${id}?language=pl-PL`;
      const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits`;

      const Options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTVhMzVmNmZjMzllMjZjMzBhNmVlOWQwNjdjZWY3YSIsInN1YiI6IjY1MjI3MGVhZWE4NGM3MDBhZWVlNTE2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QiPF-6Wp-bXF_zvYMLy71Ryt3muiE0EJ6WslCE_FfEU",
        },
      };

      try {
        const movieResponse = await fetch(movieUrl, Options);
        const movieJson = await movieResponse.json();
        setMovie(movieJson);

        const castResponse = await fetch(castUrl, Options);
        const castJson = await castResponse.json();
        setCast(castJson.cast);
      } catch (err) {
        console.error("error:", err);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie || !cast) {
    return <p>Loading...</p>; // or any loading indicator
  }

  return (
    <MovieChosenSection>
      <MovieChosenSectionInfo>
        <Movie src={movie.poster_path}>
        </Movie>
        <Details>
          <h2>{movie.original_title}</h2>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", transform: "translateY(-25px)" }}>
            <p>wydano: {movie.release_date}</p>
          </div>
          <p>{movie.overview}</p>
          <p>Obsada:</p>
          <ActorsSection>
            {cast.map((actor) => (
              <Actor key={actor.id} name={actor.name} character={actor.character} photo={actor.profile_path} />
            ))}
          </ActorsSection>
        </Details>
      </MovieChosenSectionInfo>
    </MovieChosenSection>
  );
};
export default ChoosenMovie;
