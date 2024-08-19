import MovieSectionMovies from "./logic/movies-section-logic";
import { MoviesSectionStyle, MoviesBanner, MoviesSectionPhotoStyle } from "./style/MovieSectionStyle";
import banner from "./icons/banner2.jpg";
const MoviesSection = () => {
  return (
    <MoviesSectionStyle>
      <MoviesBanner>
        <img src={banner} alt="banner"></img>
      </MoviesBanner>
      <MoviesSectionPhotoStyle>
        <MovieSectionMovies />
      </MoviesSectionPhotoStyle>
    </MoviesSectionStyle>
  );
};
export default MoviesSection;
