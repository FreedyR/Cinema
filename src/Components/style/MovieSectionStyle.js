import styled from "styled-components";
export const MoviesSectionStyle = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  
`;
export const MoviesBanner = styled.section`
  position: relative;
  z-index: -2;
  img {
    width: 100%;
    aspect-ratio: 16/9;
  }
`;
export const MoviesSectionPhotoStyle = styled.section`
  position: relative;
  display: grid;
  z-index: 1;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-template-rows: auto 1f;
  gap: 0.5rem;
  transform: translateY(-3rem);
  @media (max-width: 480px){
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
  @media (min-width:480px, max-width: 768px){
    grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
  }
  @media (min-width: 768px,max-width: 1279px){
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  }
`;
export const MoviePhoto = styled.div`
  display: grid;
  position: relative;
  grid-auto-rows: auto 1fr;
  text-align: center;
  font-size: 1.3rem;
  border-radius: 20px;
  
  img {
    width: 100%;
    aspect-ratio: 0;
  }
  a{
    transition: scale 1s ease;
  }
  & a:is(:hover){
    scale: 110%;
  }
  & a:is(:focus){
    scale: 110%;
  }
`;
