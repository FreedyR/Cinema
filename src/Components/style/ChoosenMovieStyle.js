import styled from "styled-components";
export const MovieChosenSection = styled.section`
  min-height: 100vh;
  display: grid;
`;
export const MovieChosenSectionInfo = styled.section`
  font-size: 1.5rem;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: auto 4fr;
  z-index: 2;
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }
  h2 {
    transform: translateY(-30px);
  }
`;
export const Movie = styled.section`
  position: relative;
  z-index: 1;
  height:80vh;
  background-image: ${(props) => `url(https://image.tmdb.org/t/p/original/${props.src})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  bacground-attachment: fixed;
`;
export const Details = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: black;
  padding: 0.25rem;
  z-index: 1;
  gap: 0.2rem;
  h2,div,span{
    display: block;
  }
  p{
    font-size: 1.5rem;
  }
`;
export const ActorsSection = styled.section`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-template-rows: 2fr;
  padding: 0.25rem;
  gap: 0.25rem;
`;
export const Actors = styled.div`
  display: flex;
  img{
    width: 100%;
    aspect-ratio: 1/1;
  }
`;